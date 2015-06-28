"use strict";

var module = (function () {

    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255);
        var green = getRandomValue(0, 255);
        var blue = getRandomValue(0, 255);

        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    function create() {
        var div = document.createElement('div');
        var style = div.style;

        style.background = getRandomColor();
        style.fontSize = getRandomValue(17, 32);
        style.borderColor = getRandomColor();
        style.borderStyle = 'solid';
        style.width = '50px';
        style.height = '50px';
        style.position = 'absolute';

        div.innerHTML = 'Div';

        return div;
    }

    function addMovingShape(type) {
        var div = create();
        document.body.appendChild(div);
        if (type === 'rect') {
            moveToRect(div);
        } else {
            moveToCircle(div);
        }
    }

    function moveToRect(element) {
        var top = 200;
        var left = 400;

        setInterval(function () {
            if (top <= 450 && left === 400) {
                top += 1;
            } else if (left <= 700 && top > 449) {
                left += 1;
            } else if (left > 699 && top >= 200) {
                top -= 1;
            } else if (top < 201 && left >= 400) {
                left -= 1;
            }

            element.style.top = top + 'px';
            element.style.left = left + 'px';

        }, 5);
    }

    function moveToCircle(element) {
        element.setAttribute("angleAttr", "0");
        element.style.top = '600px';
        element.style.left = '320px';

        setInterval(function () {
            var angleInRadians = (element.getAttribute("angleAttr")) * (Math.PI / 180);
            var left = 150 * Math.cos(angleInRadians) + 800;
            var top = 150 * Math.sin(angleInRadians) + 300;
            element.style.left = left + "px";
            element.style.top = top + "px";
            element.attributes.angleAttr.nodeValue++;
        }, 5);
    }

    return {
        add: addMovingShape
    };
}());