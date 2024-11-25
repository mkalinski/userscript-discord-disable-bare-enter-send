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

    function isMessageBoxActive() {
        // This is a best-effort guess.
        const activeElem = document.activeElement;

        return activeElem
            && activeElem.role === 'textbox'
            && activeElem.ariaMultiLine === 'true'
            && activeElem.spellcheck;
    }

    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'Enter'
            && !event.ctrlKey
            && !event.shiftKey
            && isMessageBoxActive()
        ) {
            event.stopPropagation();
        }
    }, {capture: true})
})();
