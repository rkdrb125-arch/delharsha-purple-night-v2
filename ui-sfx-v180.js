/* v180: Title and menu SFX. Playback is initiated only by real user interactions. */
(()=>{
  'use strict';
  const sources={title:'assets/audio/ui_title_start_continue_v180.mp3',menu:'assets/audio/ui_menu_settings_v180.mp3'};
  const audio={};
  for(const [key,src] of Object.entries(sources)){
    const a=new Audio(src);a.preload='auto';a.volume=key==='title'?0.65:0.55;audio[key]=a;
  }
  const titleIds=new Set(['newBtn','continueBtn']);
  // Other title actions and game/menu buttons share the gentler menu sound.
  const menuIds=new Set(['settingsBtn','v112OptionsBtn','loadHomeBtn','charactersHomeBtn','v112GalleryBtn','badEndRewardButton']);
  function soundFor(button){
    if(!button || button.disabled || button.getAttribute('aria-disabled')==='true')return null;
    if(titleIds.has(button.id))return 'title';
    if(menuIds.has(button.id))return 'menu';
    if(button.closest('.menu, .modal-actions, .modal, .settings, .settings-panel, .game-menu, .toolbar, header'))return 'menu';
    return null;
  }
  document.addEventListener('click',event=>{
    const target=event.target;
    if(!(target instanceof Element))return;
    const button=target.closest('button');
    const key=soundFor(button);
    if(!key)return;
    try{const a=audio[key];a.pause();a.currentTime=0;const p=a.play();if(p&&typeof p.catch==='function')p.catch(()=>{});}catch(_e){}
  },true);
})();
