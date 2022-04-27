"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
    getPerimeter() {
        return ['Pole koła: ' + 2 * Math.PI * this.radius, ' Obwód koła: ' + this.getArea()];
    }
}
const nr = document.querySelector('#nr');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
buttons.forEach(button => {
    button.addEventListener('click', calculateCircle);
});
function calculateCircle(e) {
    const rad = Number(nr.value);
    const circle = new Circle(rad);
    const tar = e.target;
    if (tar.id === 'btn') {
        result.innerHTML = `Pole Koła: ${circle.getArea()}`;
    }
    else if (tar.id === 'btn1') {
        result.innerHTML = `${circle.getPerimeter()}`;
    }
}
