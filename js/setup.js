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
    wizzardTemp.querySelector(".setup-similar-label").textContent = wizzard.name[getRandomInteger(0,coatColors.length-1)] + " " + wizzard.surname[getRandomInteger(0,coatColors.length-1)];
    wizzardTemp.querySelector(".wizard-coat").style.fill = wizzard.coatColor[getRandomInteger(0,coatColors.length-1)];
    wizzardTemp.querySelector(".wizard-eyes").style.fill = wizzard.eyesColor[getRandomInteger(0,coatColors.length-1)];
    similarListElement.appendChild(wizzardTemp);
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

function closePopup() {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", pressEscape);
}

function openPopup() {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", pressEscape);
}

setupOpen.addEventListener("click", function() {
    openPopup();
})

setupClose.addEventListener("click", function() {
    closePopup();
})

document.addEventListener("keydown", function(evt) {
    pressEscape();
})

setupClose.addEventListener("keydown", function (evt) {
    if(evt.keyCode=== ENTER_KEYCODE){
        closePopup();
    }
})

function pressEscape(evt) {
    if(evt.keyCode=== ESC_KEYCODE){
        closePopup();
    }
}

 setupOpen.addEventListener("keydown", function (evt) {
    if(evt.keyCode === ENTER_KEYCODE){
        openPopup();
    }
})

let setupUserName = setup.querySelector(".setup-user-name");
let setupWizardForm = document.querySelector(".setup-wizard-form");

setupWizardForm.setAttribute("action", "https://js.dump.academy/code-andmagick");
setupWizardForm.setAttribute( "method", "POST");
setupUserName.setAttribute("minlength",2);
setupUserName.setAttribute("maxlength",25);
setupUserName.setAttribute("required","required");

// Realise Drug And Drop
document.querySelector(".upload").addEventListener("mousedown", function(evt) {
    evt.preventDefault();
    let dragged = false;
    let startCords = {
        x : evt.clientX,
        y : evt.clientY
    }

    function mouseMove(moveEvt){
        dragged = true;
        let shift = {
            x: startCords.x - moveEvt.clientX,
            y: startCords.y - moveEvt.clientY
        }

        startCords = {
            x : moveEvt.clientX,
            y : moveEvt.clientY
        }
        setup.style.top = (setup.offsetTop - shift.y) + "px";
        setup.style.left = (setup.offsetLeft - shift.x) + "px";
    }

    function mouseUp(){
        dragged = false;	document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    }

    if (dragged){
        function onClickPreventDefault(evt) {
            evt.preventDefault();
            document.querySelector(".upload").removeEventListener("click", onClickPreventDefault);
        }

        document.querySelector(".upload").addEventListener("click", onClickPreventDefault);
    }


    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp)
})

// document.querySelector(".setup-user-name").addEventListener("invalid", function (evt) {
//     if(document.querySelector(".setup-user-name").validity.tooShort){
//         document.querySelector(".setup-user-name").setCustomValidity("поле слишком короткое");
//         console.log("поле слишком короткое")
//     }else if(document.querySelector(".setup-user-name").validity.tooLong){
//         document.querySelector(".setup-user-name").setCustomValidity("поле слишком длинное");
//         console.log("поле слишком длинное");
//     }
//
// })