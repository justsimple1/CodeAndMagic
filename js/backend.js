"use strict";

(function() {
    window.load = function(onSuccess) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', "https://js.dump.academy/code-and-magick/data");

        xhr.addEventListener("load", function () {
            onSuccess(xhr.response);
        })

        xhr.send();}
})();

(function() {
    window.upload = function(data, onSuccess) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', "https://js.dump.academy/code-and-magick/data");
        xhr.addEventListener("load", function () {
            onSuccess(xhr.response);
        })

        xhr.send(data);}
})();