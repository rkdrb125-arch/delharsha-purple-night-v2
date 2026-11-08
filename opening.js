(()=>{
'use strict';
const panel=document.getElementById('openingPanel'),play=document.getElementById('openingPlay'),stop=document.getElementById('openingStop');
const status=document.getElementById('openingStatus'),modal=document.getElementById('openingVideoModal'),video=document.getElementById('openingVideo'),closeBtn=document.getElementById('openingVideoClose'),error=document.getElementById('openingVideoError');
if(!panel||!play||!modal||!video)return;
panel.open=false;let lastFocus=null;
function close(){video.pause();try{video.currentTime=0;}catch(_){}modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('opening-video-active');panel.open=false;status.textContent='영상에 포함된 음성이 재생됩니다';if(lastFocus&&lastFocus.isConnected)lastFocus.focus({preventScroll:true});}
async function open(){lastFocus=document.activeElement;error.hidden=true;modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('opening-video-active');panel.open=false;document.dispatchEvent(new Event('delharsha:game-audio-stop'));video.volume=1;video.muted=false;try{await video.play();status.textContent='오프닝 영상 재생 중';}catch(_){error.hidden=false;status.textContent='영상 재생 버튼을 눌러 주세요';}closeBtn.focus({preventScroll:true});}
play.addEventListener('click',open);stop?.addEventListener('click',close);closeBtn.addEventListener('click',close);video.addEventListener('ended',close);video.addEventListener('error',()=>{error.hidden=false;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden){e.preventDefault();close();}});
document.addEventListener('pointerdown',e=>{if(panel.open&&!panel.contains(e.target))panel.open=false;});
['newBtn','continueBtn','loadHomeBtn','titleBtn'].forEach(id=>document.getElementById(id)?.addEventListener('click',()=>{if(!modal.hidden)close();}));
new MutationObserver(()=>{if(!document.getElementById('home')?.classList.contains('active')&&!modal.hidden)close();}).observe(document.getElementById('home'),{attributes:true,attributeFilter:['class']});
})();
