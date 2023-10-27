// ==UserScript==
// @name         Keep Token Alive Chameleon
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Token expires after 1 hour, so refresh the page once every (bit under an hour)
// @author       Naara
// @match        http://192.168.0.111:9000/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.111
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function(){ location.reload(); }, 3500*1000);
})();