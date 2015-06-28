window.onload = function () {

    var canvas = document.getElementById('animation');
    var ctx = canvas.getContext('2d');
    var paper = Raphael(0, 0, canvas.width, canvas.height);
    var center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };
    var angel = 0;
    var point = {
        x: 10,
        y: 10,
        radius: 5
    };


    function drawPoint(ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    function movePoint(center, b) {
        return {
            x: center.x + (b * angel) * Math.sin(angel),
            y: center.y + (b * angel) * Math.cos(angel)
        };
    }

    function trajectory(x, y, b) {
        var centralPoints = 'M' + x + ' ' + y;
        var spiralPoints = [centralPoints];
        for (var i = 0; i < 920; i += 1) {
            var angel = 0.1 * i;

            x = center.x + (b * angel) * Math.sin(angel);
            y = center.y + (b * angel) * Math.cos(angel);

            spiralPoints.push('L' + x + ' ' + y);
        }
        var spiralPointsStr = spiralPoints.join(' ');
        return paper.path(spiralPointsStr);
    }
    trajectory(center.x, center.y, 1);

    function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        angel += 0.15;
        if (angel <= 91.9) {
            window.requestAnimationFrame(frame);
        }

        var newPoint = movePoint({
            x: center.x - 10,
            y: center.y - 10,
            radius: point.radius,
            angel: angel}, 1);
        drawPoint(ctx, newPoint.x, newPoint.y, point.radius);

        //setTimeout(frame, 100);
    }
    frame();
};