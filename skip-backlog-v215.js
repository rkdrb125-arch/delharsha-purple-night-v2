/* v215: fast-forward and mouse-wheel dialogue backlog. UI-only; no save schema edits. */
(function(){
'use strict';
const next=document.getElementById('nextBtn'), line=document.getElementById('line'), game=document.getElementById('game');
if(!next||!line||!game)return;
const toolbar=document.createElement('div');toolbar.id='v215Toolbar';
toolbar.innerHTML='<button type="button" id="v215Skip" aria-pressed="false" title="선택지 앞에서 자동 정지">SKIP ▷▷</button><button type="button" id="v215Log" title="지나간 대사 보기">LOG ☷</button>';
const host=game.querySelector('.dialogue-footer-v193')||next.parentElement;
host.insertBefore(toolbar,host.firstChild);
const overlay=document.createElement('div');overlay.id='v215Backlog';overlay.hidden=true;
overlay.innerHTML='<div class="v215-log-panel" role="dialog" aria-modal="true" aria-label="대사 기록"><div class="v215-log-head"><strong>대사 기록</strong><span>휠로 스크롤 · 현재 회차</span><button type="button" id="v215Close" aria-label="닫기">✕</button></div><div id="v215Entries" tabindex="0"></div></div>';
document.body.appendChild(overlay);
const skipBtn=document.getElementById('v215Skip'),logBtn=document.getElementById('v215Log'),entries=document.getElementById('v215Entries');
let skipping=false, timer=null, entriesData=[], lastNode=null, lastPage=-1, lastText='', lastReading=null, lastAction=0;
const visible=el=>el&&!el.classList.contains('hidden')&&getComputedStyle(el).display!=='none';
function stop(){skipping=false;clearInterval(timer);timer=null;skipBtn.setAttribute('aria-pressed','false');skipBtn.textContent='SKIP ▷▷';}
function choiceBlocking(){
 const ch=document.getElementById('choices');
 return !!(ch&&ch.querySelector('button')&&!ch.classList.contains('v87-waiting'));
}
function logOpen(){return !overlay.hidden;}
function openLog(){stop();overlay.hidden=false;renderEntries();entries.focus();}
function closeLog(){overlay.hidden=true;}
function renderEntries(){
 entries.replaceChildren();
 for(const e of entriesData){
  const item=document.createElement('article');item.className='v215-entry';
  if(e.speaker){const title=document.createElement('strong');title.textContent=e.speaker;item.append(title);}
  const p=document.createElement('p');p.textContent=e.text;item.append(p);entries.append(item);
 }
 if(!entriesData.length){const p=document.createElement('p');p.textContent='아직 지나간 대사가 없습니다.';entries.append(p);}
 entries.scrollTop=entries.scrollHeight;
}
function pushReading(d){
 if(!d||typeof d.text!=='string'||!d.text.trim())return;
 const node=String(d.node||''),page=Number(d.page||0),text=d.text;
 // The reading event can fire repeatedly as the typewriter runs.
 if(lastNode===node&&lastPage===page&&lastText===text)return;
 if(lastNode!==node){lastNode=node;lastPage=-1;}
 lastPage=page;lastText=text;
 const speaker=document.getElementById('speaker');
 const name=speaker&&getComputedStyle(speaker).display!=='none'&&!speaker.hidden?speaker.textContent.trim():'';
 entriesData.push({node,page,text,speaker:name});
 if(entriesData.length>1200)entriesData.shift();
}
window.addEventListener('delharsa-reading',e=>{lastReading=e.detail;pushReading(e.detail);if(skipping&&choiceBlocking())stop();});
function skipTick(){
 if(logOpen()||!game.classList.contains('active')&&!game.classList.contains('show')&&getComputedStyle(game).display==='none'){stop();return;}
 if(choiceBlocking()){stop();return;}
 const d=window.DELHARSA_READING;
 if(!d||!visible(next)){stop();return;}
 // At a last page without a next node, never loop or attempt to select a choice.
 if(!d.more&&!d.canAdvance){stop();return;}
 // First click reveals current typing; second click advances the paragraph.
 next.click();
}
function start(){
 if(skipping){stop();return;}
 if(logOpen())closeLog();
 skipping=true;skipBtn.setAttribute('aria-pressed','true');skipBtn.textContent='STOP ■';
 timer=setInterval(skipTick,95);
 skipTick();
}
skipBtn.addEventListener('click',start);
logBtn.addEventListener('click',openLog);
document.getElementById('v215Close').addEventListener('click',closeLog);
overlay.addEventListener('click',e=>{if(e.target===overlay)closeLog();});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&logOpen()){e.preventDefault();closeLog();}
 if(e.key==='Control'&&e.shiftKey)stop();
});
document.addEventListener('wheel',e=>{
 if(logOpen())return;
 if(e.deltaY>=0||e.ctrlKey||e.altKey||e.metaKey)return;
 if(!game.contains(e.target))return;
 if(e.target.closest('button,select,input,textarea,.choices'))return;
 e.preventDefault();openLog();
},{passive:false});
window.addEventListener('pagehide',stop);
// Invisible next button remains the single navigation action.
// Provide a visible-free single-click surface without changing reading or save state.
const dialogue=game.querySelector('.dialogue');
if(dialogue){
 dialogue.addEventListener('click',e=>{
  if(e.target.closest('button,a,input,select,textarea,.choices,#choicePager,#v215Toolbar'))return;
  if(logOpen()||choiceBlocking())return;
  const reading=window.DELHARSA_READING;
  if(!reading||!visible(next))return;
  // Defer until existing text-click handlers have completed.
  queueMicrotask(()=>{if(visible(next)&&!choiceBlocking())next.click();});
 });
}
window.DELHARSA_V215={stop,openLog,closeLog};
})();
