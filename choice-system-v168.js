/* Stable choice roots: never inherit dialogue clipping, filters or transforms. */
(()=>{'use strict';
 const game=document.getElementById('game');
 for(const id of ['choices','choicePager']){const node=document.getElementById(id);if(node)game.append(node);}
 // Paging and narrative listeners retain the original elements and callbacks.
})();
