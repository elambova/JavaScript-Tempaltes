(function () {

    var canvas = document.getElementById('rectangle-animation');
    var ctx = canvas.getContext('2d');
    var size = {
        x: 20,
        y: 20
    };
    var radius = 10;
    var balls = [];
    var count = 20;
    var direction = {
        x: 'left',
        y: 'top'
    };
    var rects = [];
    var directions = {
        'left': -1,
        'right': +1,
        'up': -1,
        'down': +1
    };
    var speed = 3;
    var isAnimationOn = true;
    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function getRandomColor() {
        var red = getRandomValue(0, 255);
        var green = getRandomValue(0, 255);
        var blue = getRandomValue(0, 255);
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    function Rect(x, y, speed, direction) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.fillColor = getRandomColor();
        this.strokeColor = getRandomColor();
        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, size.x, size.y);
            ctx.fillStyle = this.fillColor;
            ctx.strokeStyle = this.strokeColor;
            ctx.strokeWidth = 2;
            ctx.fill();
            ctx.stroke();
        };
        this.move = function () {
            this.x += this.speed * directions[this.direction.x];
            this.y += this.speed * directions[this.direction.y];
        };
        this.bounce = function (maxX, maxY) {
            if (this.x < 0) {
                direction.x = 'right';
            }
            if (this.x > maxX - size.x) {
                direction.x = 'left';
            }
            if (this.y < 0) {
                direction.y = 'down';
            }
            if (this.y > maxY - size.y) {
                direction.y = 'up';
            }
        };
    }


    function Ball(x, y, radius, speed, direction) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.direction = direction;
        this.fillColor = getRandomColor();
        this.strokeColor = getRandomColor();
        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.fillColor;
            ctx.strokeStyle = this.strokeColor;
            ctx.strokeWidth = 2;
            ctx.fill();
            ctx.stroke();
        };
        this.move = function () {
            this.x += this.speed * directions[this.direction.x];
            this.y += this.speed * directions[this.direction.y];
        };
        this.bounce = function (maxX, maxY) {
            if (this.x < this.radius) {
                direction.x = 'right';
            }
            if (this.x > maxX - this.radius) {
                direction.x = 'left';
            }
            if (this.y < this.radius) {
                direction.y = 'down';
            }
            if (this.y > maxY - this.radius) {
                direction.y = 'up';
            }
        };
    }
    for (var i = 0; i < count; i += 1) {
        var x = getRandomValue(0, canvas.width);
        var y = getRandomValue(0, canvas.height);
        var directionX = (getRandomValue(0, 2) % 2 === 0) ? 'left' : 'right';
        var directionY = (getRandomValue(0, 2) % 2 === 0) ? 'up' : 'down';
        var rect = new Rect(x, y, speed, {
            x: directionX,
            y: directionY
        });
        rects.push(rect);

        directionX = (getRandomValue(0, 2) % 2 === 0) ? 'left' : 'right';
        directionY = (getRandomValue(0, 2) % 2 === 0) ? 'up' : 'down';
        var ball = new Ball(x, y, radius, speed, {
            x: directionX,
            y: directionY
        });
        balls.push(ball);
    }

    function animationFrame() {
        if (isAnimationOn) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < count; i += 1) {
                rects[i].move();
                balls[i].move();
                rects[i].bounce(canvas.width, canvas.height);
                balls[i].bounce(canvas.width, canvas.height);
                balls[i].draw(ctx);
                rects[i].draw(ctx);
            }
            requestAnimationFrame(animationFrame);
        }
    }
    animationFrame();
    var toggleBtn = document.getElementById('btn-toggle-animation');
    function toggleAnimation() {
        if (!isAnimationOn) {
            isAnimationOn = true;
            animationFrame();
            toggleBtn.innerHTML = 'Stop';
        } else {
            isAnimationOn = false;
            toggleBtn.innerHTML = 'Start';
        }
    }

    window.addEventListener("keypress", function (e) {
        switch (e.keyCode) {
            case 0:
                toggleAnimation();
                break;
            default:
                "Can start or stop animation!";
                break;
        }
    });
    document.addEventListener('click', toggleAnimation);

}());