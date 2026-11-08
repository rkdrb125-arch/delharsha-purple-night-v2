/* DELHARSA v112 — independent title art unlock and picker; does not alter save schema */
(()=>{'use strict';
const BASE={id:'default',name:'기본 타이틀',url:'assets/backgrounds/title.webp'};
const GALLERY='delharsha_purple_night_ending_gallery_v1';
const CHOICE='delharsha_title_art_choice_v1';
const ENDINGS=[
 ['miguel_respect','미겔 · 존중'],['miguel_confession','미겔 · 고백'],['miguel_separation','미겔 · 이별'],
 ['alex_reconcile','알렉 · 화해'],['alex_fracture','알렉 · 균열'],['court_guardian','왕궁 · 수호'],
 ['secret','비밀의 밤'],['independent','독립의 밤']
];
const AVAILABLE_ENDING_ART=new Set(); // No ending title illustrations are included in this release.
const $=id=>document.getElementById(id);
function unlocked(){let ids=[];try{const x=JSON.parse(localStorage.getItem(GALLERY)||'[]');if(Array.isArray(x))ids=x.map(y=>y&&y.id).filter(Boolean)}catch{};
 const list=[BASE];for(const [id,name] of ENDINGS){if(ids.includes(id)&&AVAILABLE_ENDING_ART.has(id))list.push({id,name,url:'assets/title-endings/'+id+'.webp'})}return list;
}
function showArt(){const list=unlocked();let selected='default';try{selected=localStorage.getItem(CHOICE)||'default'}catch{};
 let i=list.findIndex(x=>x.id===selected);if(i<0)i=list.length-1;
 const art=list[i],target=$('v112Art'),counter=$('v112Counter');if(!target)return;
 const candidate=new Image();candidate.onload=()=>{if(target.dataset.request===art.id)target.style.backgroundImage='url("'+art.url+'")'};
 candidate.onerror=()=>{if(target.dataset.request===art.id)target.style.backgroundImage='url("'+BASE.url+'")'};
 target.dataset.request=art.id;candidate.src=art.url;
 if(counter){counter.textContent=String(i+1).padStart(2,'0')+' / '+String(list.length).padStart(2,'0');counter.title=art.name}
 if($('v112Prev'))$('v112Prev').disabled=list.length<2;
 if($('v112Next'))$('v112Next').disabled=list.length<2;
}
function move(delta){const list=unlocked();let selected='default';try{selected=localStorage.getItem(CHOICE)||'default'}catch{};
 let i=list.findIndex(x=>x.id===selected);if(i<0)i=0;
 const next=list[(i+delta+list.length)%list.length];try{localStorage.setItem(CHOICE,next.id)}catch{};showArt();}
function openExisting(fn){if(typeof fn==='function')fn();}
function init(){if(!$('v112Art'))return;
 $('v112Prev')?.addEventListener('click',()=>move(-1));$('v112Next')?.addEventListener('click',()=>move(1));
 $('v112GalleryBtn')?.addEventListener('click',()=>{if(typeof gallery==='function')openExisting(gallery);else $('galleryBtn')?.click()});
 $('v112OptionsBtn')?.addEventListener('click',()=>$('settingsBtn')?.click());
 showArt();document.addEventListener('visibilitychange',()=>{if(!document.hidden)showArt()});
 window.addEventListener('storage',showArt);
 const home=$('home');if(home){new MutationObserver(()=>{if(home.classList.contains('active'))showArt()}).observe(home,{attributes:true,attributeFilter:['class']})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
