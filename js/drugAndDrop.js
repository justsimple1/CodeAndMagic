"use strict";

(function() {
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
                console.log(evt);
                evt.preventDefault();
                document.querySelector(".upload").removeEventListener("click", onClickPreventDefault);
            }
            document.querySelector(".upload").addEventListener("click", onClickPreventDefault);
        }
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp)
    })
})();
