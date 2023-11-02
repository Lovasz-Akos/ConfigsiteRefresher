// ==UserScript==
// @name         Keep Token Alive Chameleon
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Token expires after 1 hour, so refresh the page once every (bit under an hour)
// @author       Naara
// @match        http://192.168.0.111:9000/*
// @match        http://localhost:9000/*
// @match        http://https://naara.dns.chameleon.sh/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.111
// @grant        none
// @updateURL    https://github.com/Lovasz-Akos/ConfigsiteRefresher/raw/main/tokenRefresher.user.js
// @downloadURL  https://github.com/Lovasz-Akos/ConfigsiteRefresher/raw/main/tokenRefresher.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function(){ location.reload(); }, 3500*1000);
})();
