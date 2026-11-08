/* v152: mobile-safe BAD END reward playback. Gallery data is read-only. */
(()=>{
'use strict';
const GALLERY_KEY='delharsha_v88_karma_gallery';
const SHOWN_KEY='delharsha_v153_all_bad_end_video_seen';
const REQUIRED=['blood_vow','brother_funeral','heavy_crown','doll_bride'];
const home=document.getElementById('home');
const modal=document.getElementById('badEndVideoModal');
const video=document.getElementById('badEndVideo');
const closeButton=document.getElementById('badEndVideoClose');
const fallback=document.getElementById('badEndVideoFallback');
const playButton=document.getElementById('badEndVideoPlay');
const rewardButton=document.getElementById('badEndRewardButton');
if(!home||!modal||!video||!closeButton||!fallback||!playButton)return;
let active=false,playing=false,lastFocus=null,launching=false;
function collected(){try{const ids=JSON.parse(localStorage.getItem(GALLERY_KEY)||'[]');return Array.isArray(ids)?ids:[];}catch(_){return [];}}
function updateButton(){if(!rewardButton)return;const ids=collected();const count=REQUIRED.filter(id=>ids.includes(id)).length;rewardButton.textContent=count===4?'✦ BAD END 특전 영상 보기':'◇ BAD END 특전 · '+count+'/4 수집';rewardButton.disabled=count!==4;rewardButton.title=count===4?'해금된 특전 영상 재생':'BAD END 4종을 모두 수집하면 해금됩니다';}
function complete(){try{const ids=JSON.parse(localStorage.getItem(GALLERY_KEY)||'[]');return Array.isArray(ids)&&REQUIRED.every(id=>ids.includes(id));}catch(_){return false;}}
function seen(){try{return localStorage.getItem(SHOWN_KEY)==='1';}catch(_){return false;}}
function markSeen(){try{localStorage.setItem(SHOWN_KEY,'1');}catch(_){}}
function close(mark=true){
 if(!active)return;
 if(mark)markSeen();
 updateButton();
 active=false;playing=false;launching=false;
 video.pause();try{video.currentTime=0;}catch(_){}
 modal.hidden=true;modal.setAttribute('aria-hidden','true');fallback.hidden=true;
 document.body.classList.remove('badend-video-active');
 if(lastFocus&&lastFocus.isConnected){try{lastFocus.focus({preventScroll:true});}catch(_){}}
}
function showPlay(message){
 if(!active)return;
 playing=false;fallback.hidden=false;
 const p=fallback.querySelector('p');if(p)p.textContent=message||'특전 영상이 해금되었습니다. 소리와 함께 재생하려면 아래 버튼을 눌러주세요.';
}
async function play(){
 if(!active||launching)return;
 launching=true;fallback.hidden=true;
 try{video.muted=false;video.volume=1;await video.play();playing=true;}
 catch(_){showPlay('모바일 브라우저에서 자동 재생이 제한되었습니다. ▶ 영상 재생을 눌러주세요.');}
 finally{launching=false;}
}
function open(force=false){
 updateButton();
 if(active||(!force&&seen())||!complete()||!home.classList.contains('active'))return;
 active=true;lastFocus=document.activeElement;
 document.dispatchEvent(new Event('delharsha:game-audio-stop'));
 const opening=document.getElementById('openingVideo');if(opening)opening.pause();
 modal.hidden=false;modal.setAttribute('aria-hidden','false');
 document.body.classList.add('badend-video-active');
 // User-gesture playback is required for audible video on many mobile browsers.
 // Show an actionable overlay immediately; hide only after playback starts.
 showPlay('BAD END를 모두 수집했습니다! 영상을 소리와 함께 보려면 ▶ 영상 재생을 눌러주세요.');
 if(!(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)))play();
}
if(rewardButton)rewardButton.addEventListener('click',()=>open(true));
closeButton.addEventListener('click',()=>close(true));
playButton.addEventListener('click',()=>{play();});
video.addEventListener('playing',()=>{playing=true;fallback.hidden=true;});
video.addEventListener('ended',()=>close(true));
video.addEventListener('error',()=>showPlay('영상을 불러오지 못했습니다. 연결을 확인하고 다시 재생해 주세요.'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&active){e.preventDefault();close(true);}});
new MutationObserver(()=>{if(home.classList.contains('active'))open();else if(active)close(false);}).observe(home,{attributes:true,attributeFilter:['class']});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',open,{once:true});else queueMicrotask(open);
window.addEventListener('pageshow',()=>open());
window.addEventListener('storage',updateButton);
document.addEventListener('delharsha:ending',updateButton);
updateButton();
})();
