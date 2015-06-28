"use strict";

var container = document.getElementById('container');
var countRectangles = 0;
var countCircles = 0;
var countLines = 0;

container.style.border = '1px solid black';
container.style.marginBottom = '15px';

function getCanvasById(id) {
    var canvas = document.getElementById(id);
    canvas.style.border = '1px solid black';
    var ctx = canvas.getContext('2d');

    return ctx;
}

function getRandomValue(min, max) {
    return (Math.random() * (max - min) + min) | 0;
}

function getRandomColor() {
    var red = getRandomValue(0, 255);
    var green = getRandomValue(0, 255);
    var blue = getRandomValue(0, 255);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function Rect(x, y, width, height) {
    if ((typeof x !== 'number') || (typeof y !== 'number')
            || (typeof width !== 'number') || (typeof height !== 'number'))
    {
        throw new Error('Position (x, y) and size (width, height) should be number!');
    }
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
}

Rect.prototype.draw = function (canvasContext) {
    if ((this._x >= canvasContext.canvas.width) || (this._y >= canvasContext.canvas.height)) {
        throw new Error('Position/s x and/or y must have a small value!');
//        canvasContext.canvas.remove();
    }
    canvasContext.fillStyle = getRandomColor();
    canvasContext.strokeStyle = getRandomColor();
    canvasContext.strokeWidth = 65;
    canvasContext.lineWidth = 5;
    canvasContext.beginPath();
    canvasContext.rect(this._x, this._y, this._width, this._height);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();

};

function Circle(x, y, radius) {
    if ((typeof x !== 'number') || (typeof y !== 'number')
            || (typeof radius !== 'number'))
    {
        throw new Error('Position (x, y) and radius should be number!');
    }
    this._x = x;
    this._y = y;
    this._radius = radius;
}

Circle.prototype.draw = function (canvasContext) {
    if ((this._x >= canvasContext.canvas.width) || (this._y >= canvasContext.canvas.height)) {
        throw new Error('Position(s) x and(or) y must have a small value!');
    }
    canvasContext.fillStyle = getRandomColor();
    canvasContext.strokeStyle = getRandomColor();
    canvasContext.lineWidth = 5;
    canvasContext.beginPath();
    canvasContext.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
};

function Line(x1, y1, x2, y2) {
    if ((typeof x1 !== 'number') || (typeof y1 !== 'number')
            || (typeof x2 !== 'number') || (typeof y2 !== 'number'))
    {
        throw new Error('Position (x1, y1) and position (x2, y2) should be number!');
    }
    this._x1 = x1;
    this._y1 = y1;
    this._x2 = x2;
    this._y2 = y2;
}

Line.prototype.draw = function (canvasContext) {
    if ((this._x1 >= canvasContext.canvas.width) || (this._y1 >= canvasContext.canvas.height)) {
        throw new Error('Position(s) x1 and(or) y1 must have a small value!');
    }
    if ((this._x2 >= canvasContext.width) || (this._y2 >= canvasContext.height)) {
        throw new Error('Position(s) x2 and(or) y2 must have a small value!');
    }
    canvasContext.beginPath();
    canvasContext.moveTo(this._x1, this._y1);
    canvasContext.lineTo(this._x2, this._y2);
    canvasContext.strokeStyle = getRandomColor();
    canvasContext.lineWidth = 5;
    canvasContext.stroke();
};


document.getElementById('create-rect').addEventListener('click', function () {

    var positionX = parseFloat(document.getElementById('position-x').value);
    var positionY = parseFloat(document.getElementById('position-y').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);

    try {
        var rectangle = new Rect(positionX, positionY, width, height);
        var canvasContext = null;
        if (countRectangles % 2 === 0) {
            canvasContext = getCanvasById('the-canvas-a');
        } else if (countRectangles % 3 === 0) {
            canvasContext = getCanvasById('the-canvas-b');
        } else {
            canvasContext = getCanvasById('the-canvas-c');
        }

        rectangle.draw(canvasContext);
        countRectangles += 1;
    } catch (err) {
        alert(err);
    }
});

document.getElementById('create-circle').addEventListener('click', function () {

    var centerX = parseFloat(document.getElementById('center-x').value);
    var centerY = parseFloat(document.getElementById('center-y').value);
    var radius = parseFloat(document.getElementById('radius').value);

    try {
        var circle = new Circle(centerX, centerY, radius);
        var canvasContext = null;
        if (countCircles % 2 === 0) {
            canvasContext = getCanvasById('the-canvas-a');
        } else if (countCircles % 3 === 0) {
            canvasContext = getCanvasById('the-canvas-b');
        } else {
            canvasContext = getCanvasById('the-canvas-c');
        }

        circle.draw(canvasContext);
        countCircles += 1;
    } catch (err) {
        alert(err);
    }
});

document.getElementById('create-line').addEventListener('click', function () {

    var startX = parseFloat(document.getElementById('start-x').value);
    var startY = parseFloat(document.getElementById('start-y').value);
    var endX = parseFloat(document.getElementById('end-x').value);
    var endY = parseFloat(document.getElementById('end-y').value);

    try {
        var line = new Line(startX, startY, endX, endY);
        var canvasContext = null;
        if (countLines % 2 === 0) {
            canvasContext = getCanvasById('the-canvas-a');
        } else if (countLines % 3 === 0) {
            canvasContext = getCanvasById('the-canvas-b');
        } else {
            canvasContext = getCanvasById('the-canvas-c');
        }

        line.draw(canvasContext);
        countLines += 1;
    } catch (err) {
        alert(err);
    }
});



