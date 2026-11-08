/* v137: suppress native selection/callout without cancelling game taps. */
(() => {
  'use strict';
  const editable = (el) => el instanceof Element && !!el.closest('input:not([type="range"]), textarea, [contenteditable="true"], [contenteditable=""], [contenteditable="plaintext-only"]');
  const inGame = (el) => el instanceof Element && !!el.closest('#app, .game-viewport');
  for (const eventName of ['selectstart', 'contextmenu', 'dragstart']) {
    document.addEventListener(eventName, (event) => {
      if (!inGame(event.target) || editable(event.target)) return;
      event.preventDefault();
    }, {capture:true});
  }
})();
