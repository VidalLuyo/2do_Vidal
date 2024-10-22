//funcionalidad 1: Ruleta
const rotatingImage = document.getElementById('rotatingImage');
let angle = 0;

function rotate() {
    angle = (angle + 0.5) % 360; 
    rotatingImage.style.transform = `rotate(${angle}deg)`; 
    requestAnimationFrame(rotate); 
}


rotate();
