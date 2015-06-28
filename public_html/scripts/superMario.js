(function () {
    var ctx = document.getElementById('marioAnimation').getContext('2d');
    var right = 8;
    var left = 7;
    var x;
    var y;
    var walkRight = 0;
    var walkLeft = 580;
    var isAnimationOn = true;
    var img = new Image();

    img.src = "./images/mario.png";
    img.onload = draw;

    function draw() {
//        requestAnimationFrame(draw);
        if (isAnimationOn) {
            ctx.clearRect(0, 0, 600, 400);
            if (walkRight === 580) {
                leftWalk();
                if (walkLeft === 0) {
                    walkRight = 0;
                    leftWalk();
                }
                if (walkRight === 0) {
                    walkLeft = 580;
                    rightWalk();
                }
            } else {
                rightWalk();
            }
            setTimeout(draw, 100);
        }
    }

    function rightWalk() {
        x = (right % 16) * 16;
        y = Math.floor(right / 16) * 32;
        ctx.drawImage(img, x, y, 15, 32, walkRight, 0, 15, 32);
        walkRight += 10;
        if (right === 12) {
            right = 9;
        } else {
            right += 1;
        }
    }

    function leftWalk() {
        x = (left % 16) * 15.95;
        y = Math.floor(left / 16) * 32;
        ctx.drawImage(img, x, y, 15, 32, walkLeft, 0, 15, 32);
        walkLeft -= 10;
        if (left === 4) {
            left = 6;
        } else {
            left -= 1;
        }
    }

    document.getElementById('click-button').addEventListener("click", function () {
        if (isAnimationOn) {
            isAnimationOn = false;
            draw();
        } else {
            isAnimationOn = true;
            draw();
        }
    });
}());