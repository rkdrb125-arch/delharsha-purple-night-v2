(()=>{
'use strict';
const panel=document.getElementById('openingPanel'),play=document.getElementById('openingPlay'),stop=document.getElementById('openingStop');
const status=document.getElementById('openingStatus'),modal=document.getElementById('openingVideoModal'),video=document.getElementById('openingVideo'),closeBtn=document.getElementById('openingVideoClose'),error=document.getElementById('openingVideoError'),start=document.getElementById('openingVideoStart');
if(!panel||!play||!modal||!video)return;
const SEEN='delharsha_opening_seen_v1';
let lastFocus=null,phase='closed',generation=0,timer=null,fade=null,seen=false;
try{seen=localStorage.getItem(SEEN)==='1';}catch(_){}
panel.open=false;
const reduced=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||document.body.classList.contains('reduce-effects');
function markSeen(){seen=true;try{localStorage.setItem(SEEN,'1');}catch(_){} }
function clearTimers(){clearTimeout(timer);clearInterval(fade);timer=fade=null;}
function finish(){
 clearTimers();generation++;phase='closed';video.pause();try{video.currentTime=0;}catch(_){}
 modal.hidden=true;modal.setAttribute('aria-hidden','true');modal.classList.remove('opening-leaving');
 document.body.classList.remove('opening-video-active');document.getElementById('app')?.removeAttribute('inert');panel.open=false;start.hidden=true;
 status.textContent='영상에 포함된 음성이 재생됩니다';
 if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});
 document.dispatchEvent(new Event('delharsha:opening-closed'));
}
function close(natural=false){
 if(phase==='closed'||phase==='leaving')return;
 markSeen();clearTimers();generation++;phase='leaving';start.hidden=true;
 const duration=reduced()?120:(natural?1600:500),hold=natural&&!reduced()?800:0;
 timer=setTimeout(()=>{
  modal.style.transitionDuration=duration+'ms';modal.classList.add('opening-leaving');
  const begin=performance.now(),volume=video.volume;
  fade=setInterval(()=>{video.volume=Math.max(0,volume*(1-(performance.now()-begin)/duration));},32);
  timer=setTimeout(finish,duration);
 },hold);
}
async function attempt(){
 const token=++generation;phase='playing';start.hidden=true;error.hidden=true;
 video.volume=1;video.muted=false;
 try{await video.play();if(token!==generation)return;markSeen();status.textContent='오프닝 영상 재생 중';}
 catch(_){if(token!==generation)return;phase='ready';start.hidden=false;error.hidden=false;error.textContent='아래 재생 버튼을 누르면 소리와 함께 시작됩니다.';status.textContent='화면의 재생 버튼을 눌러 주세요';start.focus({preventScroll:true});}
}
function open(){
 if(phase!=='closed')return;
 clearTimers();lastFocus=document.activeElement;modal.classList.remove('opening-leaving');modal.hidden=false;modal.setAttribute('aria-hidden','false');
 document.body.classList.add('opening-video-active');document.getElementById('app')?.setAttribute('inert','');panel.open=false;
 document.dispatchEvent(new Event('delharsha:game-audio-stop'));
 closeBtn.focus({preventScroll:true});attempt();
}
play.addEventListener('click',open);start.addEventListener('click',attempt);
stop?.addEventListener('click',()=>close());closeBtn.addEventListener('click',()=>close());
video.addEventListener('ended',()=>close(true));
video.addEventListener('playing',()=>{if(phase!=='closed'&&phase!=='leaving'){markSeen();start.hidden=true;error.hidden=true;}});
video.addEventListener('error',()=>{if(phase==='closed'||phase==='leaving')return;error.hidden=false;error.textContent='영상을 불러오지 못했습니다. 다시 재생하거나 닫기를 눌러 주세요.';start.hidden=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden){e.preventDefault();close();}});
document.addEventListener('pointerdown',e=>{if(panel.open&&!panel.contains(e.target))panel.open=false;});
['newBtn','continueBtn','loadHomeBtn','titleBtn'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>{if(!modal.hidden)finish();}));
const home=document.getElementById('home');
new MutationObserver(()=>{if(!home.classList.contains('active')&&!modal.hidden)finish();}).observe(home,{attributes:true,attributeFilter:['class']});
// Once per browser storage. Blocked autoplay remains retryable; explicit skip counts as seen.
if(!seen&&home.classList.contains('active'))open();
})();
