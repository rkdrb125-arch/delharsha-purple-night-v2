(()=>{
'use strict';
const root=document.getElementById('pvIntro');if(!root)return;
const start=document.getElementById('pvStart'),begin=document.getElementById('pvBegin'),silent=document.getElementById('pvNoSound'),skip=document.getElementById('pvSkip');
const back=document.getElementById('pvBack'),scene=document.getElementById('pvScene'),moons=document.getElementById('pvMoons');
const kicker=document.getElementById('pvKicker'),headline=document.getElementById('pvHeadline'),subline=document.getElementById('pvSubline'),progress=document.getElementById('pvProgress'),note=document.getElementById('pvSoundNote');
const tracks={ko:'assets/audio/opening_ko.mp3',ja:'assets/audio/opening_ja.mp3'};
const scenes=[
 {at:0,bg:'assets/backgrounds/capital_night.webp',k:'THREE MOONS · ONE KINGDOM',h:'세 개의 달',s:'밤이 내리면, 운명이 시작된다.',moons:true},
 {at:8,bg:'assets/backgrounds/palace.webp',k:'THE ROYAL PALACE',h:'왕궁의 그림자',s:'찬란한 빛 아래 감춰진 이야기.',moons:false},
 {at:17,bg:'assets/backgrounds/leonhardt_manor.webp',k:'DANIEL LEONHARDT',h:'다니엘 레온하르트',s:'한 번의 선택이, 모든 것을 바꾼다.',moons:false},
 {at:27,bg:'assets/backgrounds/cotriman_roses.webp',k:'MIGUEL COTRIMAN',h:'미겔 코트리먼',s:'노란 장미 사이로 스치는 약속.',moons:false},
 {at:37,bg:'assets/backgrounds/ballroom.webp',k:'ALEX LEONHARDT',h:'알렉스 레온하르트',s:'가문의 명예와 마음 사이에서.',moons:false},
 {at:47,bg:'assets/backgrounds/garden.webp',k:'FATE · PROMISE · DESIRE',h:'엇갈리는 마음',s:'당신은 어떤 밤을 선택할 것인가.',moons:false},
 {at:58,bg:'assets/backgrounds/asel_fountain_night.webp',k:'DELHARSA',h:'보라색의 밤',s:'THREE MOONS · ONE FORBIDDEN PROMISE',moons:true},
 {at:69,bg:'',k:'DELHARSA',h:'보라색의 밤',s:'그 밤의 이야기가 시작된다.',moons:true}
];
const duration=77;let selected='ko',audio=null,active=false,ended=false,startTime=0,elapsed=0,frame=0,previous=-1;
try{const lang=localStorage.getItem('delharsha_opening_language_v1');if(lang==='ja')selected='ja';}catch(_){ }
function updateLanguage(){document.querySelectorAll('[data-pv-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pvLang===selected)));}
document.querySelectorAll('[data-pv-lang]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.pvLang;try{localStorage.setItem('delharsha_opening_language_v1',selected);}catch(_){}updateLanguage();}));
function stopAudio(){if(audio){audio.pause();audio.removeAttribute('src');audio.load();audio=null;}}
function close(){if(ended)return;ended=true;active=false;cancelAnimationFrame(frame);stopAudio();root.classList.add('pv-gone');root.setAttribute('aria-hidden','true');document.body.style.overflow='';try{sessionStorage.setItem('delharsha_pv_seen_v86','1');}catch(_){}document.getElementById('newBtn')?.focus({preventScroll:true});}
function render(seconds){let idx=0;for(let i=1;i<scenes.length;i++){if(seconds>=scenes[i].at)idx=i;else break;}if(idx!==previous){previous=idx;const item=scenes[idx];scene.classList.add('pv-switch');setTimeout(()=>{if(ended)return;back.style.backgroundImage=item.bg?'url("'+item.bg+'")':'none';back.style.opacity=item.bg?'.55':'0';kicker.textContent=item.k;headline.textContent=item.h;subline.textContent=item.s;moons.style.opacity=item.moons?'.7':'0';scene.classList.remove('pv-switch');},250);}progress.style.width=(Math.min(100,seconds/duration*100))+'%';}
function tick(t){if(!active||ended)return;const seconds=(t-startTime)/1000+elapsed;render(seconds);if(seconds>=duration){close();return;}frame=requestAnimationFrame(tick);}
async function play(withAudio){if(active||ended)return;active=true;start.hidden=true;start.style.display='none';document.body.style.overflow='hidden';elapsed=0;startTime=performance.now();render(0);if(withAudio){audio=new Audio(tracks[selected]);audio.preload='auto';audio.volume=.8;audio.addEventListener('ended',()=>{if(!ended)close();});audio.addEventListener('error',()=>{note.textContent='음악을 불러올 수 없어 영상만 재생합니다.';});try{await audio.play();}catch(_){note.textContent='브라우저에서 음악이 차단되어 영상만 재생합니다.';}}if(!ended)frame=requestAnimationFrame(tick);}
begin.addEventListener('click',()=>play(true));silent.addEventListener('click',()=>play(false));skip.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!ended){e.preventDefault();close();}});
document.addEventListener('visibilitychange',()=>{if(!active||ended)return;if(document.hidden){cancelAnimationFrame(frame);elapsed=(performance.now()-startTime)/1000+elapsed;audio?.pause();}else{startTime=performance.now();if(audio&&!audio.ended)audio.play().catch(()=>{});frame=requestAnimationFrame(tick);}});
// Preserve normal title-screen music selection; this player never changes save-game keys.
// A returning visitor sees the title directly in the same tab session; refresh or new tab can replay.
let seen=false;try{seen=sessionStorage.getItem('delharsha_pv_seen_v86')==='1';}catch(_){}if(seen){close();}else{document.body.style.overflow='hidden';render(0);updateLanguage();}
})();
