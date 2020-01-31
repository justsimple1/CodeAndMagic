"use strict";

(function () {
    let setupUserName = setup.querySelector(".setup-user-name");
    let setupWizardForm = document.querySelector(".setup-wizard-form");

    setupWizardForm.setAttribute("action", "https://js.dump.academy/code-andmagick");
    setupWizardForm.setAttribute( "method", "POST");
    setupUserName.setAttribute("minlength",2);
    setupUserName.setAttribute("maxlength",25);
    setupUserName.setAttribute("required","required");

    setupUserName.addEventListener("invalid", function () {
        if(setupUserName.validity.tooShort){
            setupUserName.setCustomValidity("поле слишком короткое");
            console.log("поле слишком короткое")
        }else if(setupUserName.validity.tooLong){
            setupUserName.setCustomValidity("поле слишком длинное");
            console.log("поле слишком длинное");
        }else if (setupUserName.validity.valueMissing){
            setupUserName.setCustomValidity("Заполни-ка это пусто поле!")
        }
    })
})();