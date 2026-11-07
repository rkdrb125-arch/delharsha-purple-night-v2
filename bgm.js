// v83: contextual scene music with two-channel crossfade and priority-safe ending playback.
(()=>{
'use strict';
const panel=document.getElementById('bgmPanel'),sel=document.getElementById('bgmTrack'),play=document.getElementById('bgmPlay'),pause=document.getElementById('bgmPause'),vol=document.getElementById('bgmVolume'),status=document.getElementById('bgmStatus'),game=document.getElementById('game');
if(!panel||!sel||!game)return;
const tracks={musicbox:'assets/audio/purple_night_musicbox.mp3',piano:'assets/audio/purple_night_piano.mp3',prologue:'assets/audio/scene_prologue.mp3',palace:'assets/audio/scene_palace.mp3',garden:'assets/audio/scene_garden.mp3',ballroom:'assets/audio/scene_ballroom.mp3',library:'assets/audio/scene_library.mp3',romance:'assets/audio/scene_romance.mp3',miguel:'assets/audio/scene_miguel.mp3',daniel:'assets/audio/scene_daniel.mp3'};
const names={musicbox:'보랏빛 밤 · 오르골',piano:'보랏빛 밤 · 피아노',prologue:'프롤로그',palace:'왕궁',garden:'정원',ballroom:'무도회',library:'도서관',romance:'비밀스러운 사랑',miguel:'미겔',daniel:'다니엘'};
const channels=[new Audio(),new Audio()];channels.forEach(a=>{a.preload='none';a.loop=true;a.volume=0;});
const endingAudio=new Audio('assets/audio/purple_night_alt.mp3');endingAudio.preload='none';endingAudio.loop=false;
const badEndings=new Set(['alex_fracture']);
let slot=-1,current='',desired='prologue',lastContext='',generation=0,fadeTimer=null,settleTimer=null,manualPaused=false,ending=false,volume=Number(vol.value)/100,scene=null;
const active=()=>game.classList.contains('active');
const clamp=x=>Math.max(0,Math.min(1,x));
const update=s=>{status.textContent=s;};
function cancelFade(){if(fadeTimer!==null){clearInterval(fadeTimer);fadeTimer=null;}}
function cancelSettle(){if(settleTimer!==null){clearTimeout(settleTimer);settleTimer=null;}}
function stopChannels(reset=true){generation++;cancelFade();cancelSettle();channels.forEach(a=>{a.pause();a.volume=0;if(reset){try{a.currentTime=0;}catch(_){}}});slot=-1;current='';}
function stopAll(){stopChannels();endingAudio.pause();try{endingAudio.currentTime=0;}catch(_){}ending=false;update('정지됨');}
function context(d){
 const id=String(d?.id||'').toLowerCase(),ch=String(d?.chapter||'').toLowerCase(),speaker=String(d?.speaker||'').toLowerCase(),t=String(d?.text||'').toLowerCase();
 const route=id+' '+ch;
 // Narrative/scene IDs have priority. A stray keyword in dialogue must not change the score.
 if(/cinematic|intro|prologue|opening|three.moons|서막|프롤로그/.test(route))return 'prologue';
 if(/romance|kiss|confess|intimacy|lover|연애|고백|입맞춤/.test(route))return 'romance';
 if(/garden|rose|greenhouse|정원|장미/.test(route))return 'garden';
 if(/ballroom|banquet|dance|ball_|무도회|연회/.test(route))return 'ballroom';
 if(/library|archive|study|bookroom|서재|도서관/.test(route))return 'library';
 if(/miguel|미겔/.test(route))return 'miguel';
 if(/daniel|다니엘/.test(route))return 'daniel';
 // Named venue / speaker fallback only when there is no strong scene classification.
 if(/정원|장미 정원|온실/.test(t.slice(0,90))&&d?.explore)return 'garden';
 if(/무도회장|연회장/.test(t.slice(0,90))&&d?.explore)return 'ballroom';
 if(/서재|도서관/.test(t.slice(0,90))&&d?.explore)return 'library';
 if(/미겔|miguel/.test(speaker))return 'miguel';
 if(/다니엘|daniel/.test(speaker))return 'daniel';
 return 'palace';
}
function fade(from,to,target,token,duration){
 cancelFade();const start=performance.now(),fromStart=from?from.volume:0,toStart=to.volume;
 const tick=()=>{if(token!==generation){cancelFade();return;}const p=clamp((performance.now()-start)/duration);const eased=p*p*(3-2*p);if(from)from.volume=clamp(fromStart*(1-eased));to.volume=clamp(toStart+(target-toStart)*eased);if(p>=1){cancelFade();if(from){from.pause();from.volume=0;}}};
 tick();if(duration>0)fadeTimer=setInterval(tick,32);
}
async function transition(key){
 if(!active()||ending||manualPaused||!tracks[key])return;
 if(current===key&&slot>=0&&!channels[slot].paused){channels[slot].volume=volume;return;}
 const token=++generation;cancelFade();
 const old=slot>=0?channels[slot]:null,nextSlot=slot===0?1:0,next=channels[nextSlot];
 next.pause();next.src=tracks[key];next.volume=0;current=key;slot=nextSlot;
 try{
  await next.play();
  if(token!==generation||!active()||ending||manualPaused){next.pause();return;}
  if(old&&old!==next&&!old.paused){fade(old,next,volume,token,1250);update('전환 중 · '+names[key]);}
  else{if(old&&old!==next){old.pause();old.volume=0;}fade(null,next,volume,token,750);update('재생 중 · '+names[key]);}
 }catch(_){if(token===generation){next.pause();slot=old?1-nextSlot:-1;current='';update('재생이 차단되었습니다 · ▶ 재생을 눌러 주세요');}}
}
function sync(){if(!active()||ending||manualPaused)return;const key=sel.value==='auto'?desired:sel.value;
 if(!key){stopChannels();update('음악 없음');return;}
 if(current===key&&slot>=0&&!channels[slot].paused)return;
 transition(key);
}
function queueScene(){cancelSettle();if(sel.value!=='auto'||manualPaused||ending||!active())return;
 // Avoid switching tracks for consecutive dialogue lines within the same narrative beat.
 settleTimer=setTimeout(()=>{settleTimer=null;sync();},280);
}
sel.value='auto';update('장면별 자동 BGM · 시작 후 재생');
sel.addEventListener('change',()=>{manualPaused=false;stopChannels();if(!ending)sync();});
play.addEventListener('click',()=>{if(ending){const p=endingAudio.play();if(p?.catch)p.catch(()=>update('엔딩곡 재생이 차단되었습니다'));return;}manualPaused=false;sync();});
pause.addEventListener('click',()=>{manualPaused=true;stopChannels(false);endingAudio.pause();update('일시정지');});
vol.addEventListener('input',()=>{volume=clamp(Number(vol.value)/100);endingAudio.volume=volume;channels.forEach((a,i)=>{if(i===slot&&fadeTimer===null)a.volume=volume;});});
channels.forEach(a=>a.addEventListener('error',()=>{if(a===channels[slot])update('음악 파일을 열 수 없습니다');}));
endingAudio.addEventListener('error',()=>update('엔딩 음악 파일을 열 수 없습니다'));
document.addEventListener('delharsha:scene',e=>{scene=e.detail;const next=context(scene);if(next!==desired){desired=next;queueScene();}else if(!current)queueScene();});
document.addEventListener('delharsha:ending',e=>{stopChannels();endingAudio.pause();try{endingAudio.currentTime=0;}catch(_){}ending=badEndings.has(e.detail?.id);panel.open=false;
 if(!ending){update('엔딩 · 배경음악 정지');return;}
 endingAudio.volume=volume;const p=endingAudio.play();update('배드 엔딩 전용곡 재생 중');if(p?.catch)p.catch(()=>update('엔딩곡 재생이 차단되었습니다 · ▶ 재생을 눌러 주세요'));
});
document.addEventListener('delharsha:game-audio-stop',()=>{stopAll();panel.open=false;});
const observer=new MutationObserver(()=>{if(!active()){stopAll();panel.open=false;}else if(!ending){queueScene();}});
observer.observe(game,{attributes:true,attributeFilter:['class']});
document.getElementById('titleBtn')?.addEventListener('click',()=>{stopAll();panel.open=false;});
document.addEventListener('visibilitychange',()=>{if(document.hidden){manualPaused=true;stopChannels(false);endingAudio.pause();update('일시정지 · ▶ 재생으로 재개');}});
document.addEventListener('click',e=>{const t=e.target;if(t instanceof HTMLElement&&/다음 회차 시작|새로운 이야기/.test(t.textContent||'')){ending=false;endingAudio.pause();try{endingAudio.currentTime=0;}catch(_){}}},true);
})();
