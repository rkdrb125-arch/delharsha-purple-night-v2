/* Edge tabs reuse the one existing modal and its focus/keyboard lifecycle. */
(()=>{'use strict';
 const $=id=>document.getElementById(id),game=$('game'),dialog=$('modal');
 const make=(id,label,fn)=>{const b=document.createElement('button');b.id=id;b.type='button';b.className='edge-tab';b.textContent=label;b.onclick=fn;game.append(b);return b;};
 const oldModal=modal;modal=function(title,content){dialog.classList.remove('edge-menu','edge-history');oldModal(title,content);};
 const menu=make('edgeMenu169','메뉴',()=>settings());
 const history=make('edgeHistory169','기록',()=>{journal();dialog.classList.add('edge-history');});
 const eye=make('edgeHide169','숨김',()=>hide(!game.classList.contains('ui-hidden169')));
 for(const b of [menu,history]){b.setAttribute('aria-controls','modal');b.setAttribute('aria-expanded','false');}
 menu.setAttribute('aria-label','메뉴와 설정 펼치기');history.setAttribute('aria-label','이야기 기록 펼치기');
 function hide(value){game.classList.toggle('ui-hidden169',value);eye.textContent=value?'표시':'숨김';eye.setAttribute('aria-pressed',String(value));eye.setAttribute('aria-label',value?'대사창 다시 표시':'대사창 숨기기');}
 hide(false);
 const oldSettings=settings;settings=function(){oldSettings();if(!game.classList.contains('active'))return;dialog.classList.add('edge-menu');
  const b=document.createElement('button');b.type='button';b.textContent='대사창 숨기고 장면 보기';b.onclick=()=>{closeModal();hide(true);eye.focus();};
  $('modalContent').querySelector('.unified-settings')?.append(b);
 };
 new MutationObserver(()=>{const open=!dialog.classList.contains('hidden');menu.setAttribute('aria-expanded',String(open&&dialog.classList.contains('edge-menu')));history.setAttribute('aria-expanded',String(open&&dialog.classList.contains('edge-history')));}).observe(dialog,{attributes:true,attributeFilter:['class']});
 // First tap only restores the interface. It must not advance dialogue/choices.
 window.addEventListener('click',e=>{if(!game.classList.contains('ui-hidden169')||!game.classList.contains('active')||!dialog.classList.contains('hidden')||e.target.closest?.('.edge-tab'))return;e.preventDefault();e.stopImmediatePropagation();hide(false);},true);
 window.addEventListener('keydown',e=>{if(!game.classList.contains('ui-hidden169')||!game.classList.contains('active')||!dialog.classList.contains('hidden'))return;if(['Escape','Enter',' '].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();hide(false);eye.focus();}},true);
 const oldRender=render;render=function(){hide(false);return oldRender();};
})();
