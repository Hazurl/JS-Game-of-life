(function () {

var canvas;
var context;

function InitCanvas () {
    canvas = document.getElementById('game');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
}

window.onload = function() {
    InitCanvas();
};

})();