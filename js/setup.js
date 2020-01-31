"use strict";

document.querySelector(".setup").classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

let names = [ "Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
let surnames = [ "да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Тпольницкая", "Нионго", "Ирвинг"];
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

let wizard = {
    name: names,
    surname: surnames,
    coatColor: coatColors,
    eyesColor: eyesColors,
}

let similarListElement = document.querySelector(".setup-similar-list");
let similarWizzardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

for (let i=0; i < 4; i++){
    let wizardTemp = similarWizzardTemplate.cloneNode(true);
    wizardTemp.querySelector(".setup-similar-label").textContent = wizard.name[getRandomInteger(0,coatColors.length-1)] + " " + wizard.surname[getRandomInteger(0,coatColors.length-1)];
    wizardTemp.querySelector(".wizard-coat").style.fill = wizard.coatColor[getRandomInteger(0,coatColors.length-1)];
    wizardTemp.querySelector(".wizard-eyes").style.fill = wizard.eyesColor[getRandomInteger(0,coatColors.length-1)];
    similarListElement.appendChild(wizardTemp);
}

document.querySelector(".wizard-eyes").addEventListener("click", function() {
    getNewColor(".setup-wizard .wizard-eyes", coatColors);
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



