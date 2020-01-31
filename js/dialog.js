"use strict";

(function() {
    // const ESC_KEYCODE = 27;
    // const ENTER_KEYCODE = 13;

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

    setupOpen.addEventListener("keydown", function() {
        pressEscape();
    })

    setupClose.addEventListener("keydown", function (evt) {
        console.log(evt);
        if(evt.keyCode=== ENTER_KEYCODE){
            closePopup();
        }
    })

    function pressEscape(evt) {
        console.log(evt);
        if(evt.keyCode=== ESC_KEYCODE){
            closePopup();
        }
    }

    setupOpen.addEventListener("keydown", function (evt) {
        if(evt.keyCode === ENTER_KEYCODE){
            openPopup();
        }
    })
})();
