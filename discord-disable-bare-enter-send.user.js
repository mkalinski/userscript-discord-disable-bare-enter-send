// ==UserScript==
// @name        discord-disable-bare-enter-send
// @namespace   https://github.com/mkalinski
// @match       https://discord.com/*
// @grant       none
// @description Prevent sending messages using bare Enter keypress. Use ctrl+Enter instead.
// @version     1.0.0
// @run-at      document-end
// @inject-into auto
// @author      Michał Kaliński
// @homepageURL https://github.com/mkalinski/userscript-discord-disable-bare-enter-send
// ==/UserScript==
(() => {
    'use strict';

    // NOTE: This disables Enter on the entire website,
    // not just in the text box. The selector for text box is not trivial.
    // Maybe I'll implement it one day.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.ctrlKey && !event.shiftKey) {
            event.stopPropagation();
        }
    }, {capture: true})
})();
