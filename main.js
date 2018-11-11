// ==UserScript==
// @name         Beautify Banpro en linea
// @version      0.1
// @description  Mejorar la experiencia de usuario
// @author       JS NI
// @match        https://www.banpro.com.ni/banproenlinea/*
// ==/UserScript==

(function() {
    'use strict';

    let keyboard = document.querySelector(".keyboardInput");
    let submit = document.querySelector("input[name='Submit']");

    keyboard.removeAttribute("readonly");
    keyboard.className = "dummy";

    keyboard.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            submit.click()
        }
    })

})();