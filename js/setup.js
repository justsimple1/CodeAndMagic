"use strict";

document.querySelector(".setup").classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

let names = [ "Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
let surnames = [ "да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Тпольницкая", "Нионго", "Ирвинг"];
let coatColors = ["rgb(101, 137, 164)","rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
let eyesColors = ["black","red","blue","yellow","green"];

function randomInteger(min,max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let wizzard = {
    name: names,
    surname: surnames,
    coatColor: coatColors,
    eyesColor: eyesColors,
}

let similarListElement = document.querySelector(".setup-similar-list");
let similarWizzardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

for (let i=0; i < 4; i++){
    let wizzardTemp = similarWizzardTemplate.cloneNode(true);
    wizzardTemp.querySelector(".setup-similar-label").textContent = wizzard.name[randomInteger(0,coatColors.length-1)] + " " + wizzard.surname[randomInteger(0,coatColors.length-1)];
    wizzardTemp.querySelector(".wizard-coat").style.fill = wizzard.coatColor[randomInteger(0,coatColors.length-1)];
    wizzardTemp.querySelector(".wizard-eyes").style.fill = wizzard.eyesColor[randomInteger(0,coatColors.length-1)];
    // wizzardTemp.querySelector(".setup-similar-label").textContent = wizzard.name;
    similarListElement.appendChild(wizzardTemp);
}

