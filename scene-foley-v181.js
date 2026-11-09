/* v181: scene-context ambience and restrained foley for EP1 DAY 1–3.
   No save/stat/story mutations. Source audio is bundled locally. */
(()=>{
 'use strict';
 const ROOT='assets/audio/foley-v181/';
 const files={birds_morning:1,birds_evening:1,garden_spring:1,garden_summer:1,night_nature:1,pond:1,wind_soft:1,wind_strong:1,rain_soft:1,rain_heavy:1,thunderstorm:1,page1:1,page2:1,paper:1,newspaper:1,drawer_open:1,drawer_close:1,cup:1,glass:1,pour:1,applause:1,clock:1,door_open:1,door_close:1,thunder:1};
 const audios={};let ambient=null,lastId='',lastOneShot='',unlocked=false;
 const getVolume=()=>{try{const n=Number(localStorage.getItem('delharsha_foley_volume_v181'));return Number.isFinite(n)?Math.max(0,Math.min(1,n)):0.22;}catch(_){return 0.22;}};
 let volume=getVolume();
 function audio(name){if(!files[name])return null;if(!audios[name]){const a=new Audio(ROOT+name+'.mp3');a.preload='none';audios[name]=a;}return audios[name];}
 function stopAmbient(){if(ambient){ambient.pause();ambient.currentTime=0;ambient=null;}}
 function play(name,loop=false){const a=audio(name);if(!a||!unlocked||volume===0)return;
  try{if(loop){if(ambient===a&&!a.paused)return;stopAmbient();ambient=a;a.loop=true;a.volume=volume*.58;}else{a.pause();a.currentTime=0;a.loop=false;a.volume=volume*.82;}const p=a.play();if(p?.catch)p.catch(()=>{});}catch(_){}}
 function context(d){const id=String(d.id||''),text=String(d.text||''),chapter=String(d.chapter||'');return {id,text,all:(id+' '+chapter+' '+text).toLowerCase()};}
 function choose(d){const {id,all}=context(d);const day=(typeof state!=='undefined'&&Number(state.day))||Number((document.getElementById('day')?.textContent||'').replace(/\D/g,''))||1;
  // Restrict scene foley to the first three days; later content keeps its original audio.
  if(day>3)return {amb:null,one:null};
  const isNight=/밤|달빛|야밤|심야|한밤|저녁|night|moon|어둠|어두/.test(all);
  let amb=null,one=null;
  if(/폭우|천둥|뇌우|번개|thunder/.test(all)){amb='thunderstorm';if(/번개|천둥/.test(all))one='thunder';}
  else if(/비가|빗소리|비 내|빗방울|rain/.test(all))amb='rain_soft';
  else if(/정원|화원|장미|garden|rose_|온실|greenhouse/.test(all))amb=isNight?'night_nature':'garden_spring';
  else if(/테라스|발코니|terrace|balcony/.test(all))amb=isNight?'wind_soft':'birds_evening';
  else if(/호수|연못|pond|lake/.test(all))amb='pond';
  else if(/새벽|아침|morning/.test(all))amb='birds_morning';
  if(/책장.{0,8}넘|페이지.{0,8}넘|page_turn/.test(all))one='page1';
  else if(/편지.{0,10}펼|종이.{0,10}펼|letter_open/.test(all))one='paper';
  else if(/서랍.{0,8}열|drawer_open/.test(all))one='drawer_open';
  else if(/서랍.{0,8}닫|drawer_close/.test(all))one='drawer_close';
  else if(/찻잔.{0,10}내려|잔을.{0,10}놓|cup_down/.test(all))one='cup';
  else if(/문을.{0,8}열|문이.{0,8}열|door_open/.test(all))one='door_open';
  else if(/문을.{0,8}닫|문이.{0,8}닫|door_close/.test(all))one='door_close';
  else if(/박수갈채|박수.{0,5}터|applause/.test(all))one='applause';
  return {amb,one};
 }
 let lastDetail=null;
 function onScene(d){if(!d||!d.id)return;lastDetail=d;if(d.id===lastId)return;lastId=d.id;
  const {amb,one}=choose(d);if(amb!==ambient?.dataset?.name){stopAmbient();if(amb){const a=audio(amb);a.dataset.name=amb;play(amb,true);}}
  if(one&&one!==lastOneShot)play(one);lastOneShot=one||'';
 }
 document.addEventListener('delharsha:scene',e=>onScene(e.detail));
 // Browser autoplay policy: wait for a genuine user interaction.
 document.addEventListener('pointerdown',()=>{if(unlocked)return;unlocked=true;if(lastDetail){const {amb}=choose(lastDetail);if(amb)play(amb,true);}}, {once:true,capture:true});
 document.addEventListener('keydown',()=>{if(unlocked)return;unlocked=true;if(lastDetail){const {amb}=choose(lastDetail);if(amb)play(amb,true);}}, {once:true,capture:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){if(ambient)ambient.pause();}else if(ambient&&unlocked&&volume>0){const p=ambient.play();p?.catch?.(()=>{});}});
 // Separate volume control, independent of BGM and title/menu click SFX.
 function mount(){if(document.getElementById('v181FoleyControl'))return;const panel=document.querySelector('#settingsModal, #settingsPanel, .settings-panel, .settings-modal, #optionsModal');if(!panel)return;
  const wrap=document.createElement('div');wrap.id='v181FoleyControl';wrap.style.cssText='padding:10px 4px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;color:inherit;font-size:13px';
  const label=document.createElement('label');label.textContent='환경음 · 동작 효과음';label.htmlFor='v181FoleyVolume';
  const slider=document.createElement('input');slider.id='v181FoleyVolume';slider.type='range';slider.min='0';slider.max='100';slider.value=String(Math.round(volume*100));slider.setAttribute('aria-label','환경음 및 동작 효과음 음량');slider.style.cssText='flex:1;min-width:90px;max-width:210px';
  const out=document.createElement('span');out.textContent=slider.value+'%';slider.addEventListener('input',()=>{volume=Number(slider.value)/100;out.textContent=slider.value+'%';try{localStorage.setItem('delharsha_foley_volume_v181',String(volume));}catch(_){}if(ambient){ambient.volume=volume*.58;if(!volume)ambient.pause();else if(unlocked){const p=ambient.play();p?.catch?.(()=>{});}}});wrap.append(label,slider,out);panel.append(wrap);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
 window.DELHARSA_FOLEY_V181={setVolume(v){volume=Math.max(0,Math.min(1,Number(v)||0));try{localStorage.setItem('delharsha_foley_volume_v181',String(volume));}catch(_){}if(ambient)ambient.volume=volume*.58;},getVolume:()=>volume};
})();