"use strict";

document.querySelector(".setup").classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

let coatColors = ["rgb(101, 137, 164)","rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
let eyesColors = ["black","red","blue","yellow","green"];

let setup = document.querySelector(".setup");
let setupOpen = document.querySelector(".setup-open");
let setupClose = setup.querySelector(".setup-close");

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

function getRandomInteger(min,max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let similarListElement = document.querySelector(".setup-similar-list");
let similarWizzardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

    function renderWizard(wizard){
        let wizardTemp = similarWizzardTemplate.cloneNode(true);
        wizardTemp.querySelector(".setup-similar-label").textContent = wizard.name;
        wizardTemp.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
        wizardTemp.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
        return wizardTemp;
    }

    window.load(function(wizard){
        let fragment = document.createDocumentFragment();
        for(let i = 0; i < 4; i++){
            fragment.appendChild(renderWizard(wizard[i]));
            similarListElement.appendChild(fragment);
        }
    })

document.querySelector(".wizard-eyes").addEventListener("click", function() {
    getNewColor(".setup-wizard .wizard-eyes", eyesColors);
})

document.querySelector(".wizard-coat").addEventListener("click", function() {
    getNewColor(".setup-wizard .wizard-coat", coatColors);
})

document.querySelector(".setup-fireball-wrap").addEventListener("click", function() {
    document.querySelector(".setup-fireball-wrap").style.backgroundColor = "#"+coatColors[getRandomInteger(0, coatColors.length-1)];
})

function getNewColor(selector, array) {
    document.querySelector(selector).style.fill= array[getRandomInteger(0, array.length-1)]
}

let form =  document.querySelector(".setup-wizard-form") ;

form.addEventListener('submit', function(evt) {
    window.upload(new FormData(form), function () {

    })
    setup.classList.add("hidden");
    evt.preventDefault();
})

