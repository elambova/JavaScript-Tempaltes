"use strict";
var paper = Raphael('svg-container', 900, 500);

paper.rect(10, 10, 450, 200)
        .attr({
            stroke: '#697257',
            'stroke-width': 5
        });
paper.path('M 20 50 L45 25 L67 50 L90 25 L115 50 L105 60 L90 45 L75 60 L100 85 L67 115 L35 85 L60 60 L45 45 L30 60 Z')
        .attr({
            fill: '#5CE600',
            stroke: '#A8D889'
        });
paper.rect(67, 70, 20, 20)
        .attr({
            fill: 'white',
            stroke: '#A8D889'
        })
        .rotate(45, 67, 70);
paper.setStart();
paper.path('M125 40 L170 40 L170 55 L155 55 L155 115 L140 115 L140 55 L125 55 Z');
paper.path('M170 90 L200 90 C200 50 160 55 160 90 S190 120 200 105 L200 95 C185 110 170 107 170 90 Z');
paper.rect(205, 40, 15, 75);
paper.path('M230 90 L265 90 C265 50 225 55 225 90 S255 120 265 105 L265 95 C255 110 235 110 233 90 Z');
paper.path('M270 60 L285 60 L285 75 Q295 50 305 60 L305 75 Q295 70 285 90 L285 115 L270 115 Z');
paper.rect(315, 60, 15, 55);
paper.circle(322.5, 47, 7.5);
paper.path('M340 40 L355 40 L355 75 L370 60 L385 60 L360 85 L385 115 L370 115 L355 95 L355 115 L340 115 Z ');

paper.text(290, 150, 'Develop experiences');
paper.setFinish()
        .attr({
            fill: 'black',
            'font-size': 30,
            'font-family': 'sans-serif'
        });
paper.circle(395, 65, 6);
paper.text(396, 65, 'R');
paper.setStart();
paper.path('M170 82 L190 82 C185 70 175 70 170 82');
paper.path('M235 82 L255 82 C255 70 235 70 235 82');
paper.setFinish()
        .attr({
            fill: 'white'
        });

paper.rect(10, 220, 400, 150)
        .attr({
            stroke: 'gray',
            'stroke-width': 5
        });
paper.setStart();
paper.path('M35 250 L45 250 L50 270 L55 250 L65 250 L55 280 L55 310 L45 310 L45 280 Z');
paper.circle(75, 285, 20).scale(0.6, 1.2);
paper.path('M90 265 L100 265 L100 295 Q100 307 110 295 L110 265 L120 265 L120 310 L110 310 L110 305 Q95 315 90 305 Z');
paper.setFinish()
        .attr({
            fill: '#4B4B4B'
        });
paper.circle(75, 285, 10).scale(0.6, 1.2)
        .attr({
            fill: 'white'
        });
paper.rect(130, 240, 180, 80, 15, 15)
        .attr({
            fill: '#EC2828',
            stroke: '#E5DBDB'
        });
paper.setStart();
paper.path('M150 250 L180 250 L180 260 L170 260 L170 310 L160 310 L160 260 L150 260 Z');
paper.path('M180 265 L190 265 L190 295 Q190 307 200 295 L200 265 L210 265 L210 310 L200 310 L200 305 Q185 315 180 305 Z');
paper.path('M220 250 L230 250 L230 270 Q247 255 250 275 L250 300 Q245 320 230 300 L230 310 L220 310 Z');
paper.path('M255 275 C257 255 283 255 285 275 L285 287 L263 287 C261 306 276 308 275 295 L285 295 C286 315 257 315 255.5 300 L255 295 Z');
paper.setFinish()
        .attr({
            fill: 'white',
            stroke: 'white'
        });
paper.setStart();
paper.path('M230 275 Q235 270 240 275 L240 295 Q235 300 230 295 Z');
paper.path('M263 280 L276 280 C279 267 260 268 263 280 Z');
paper.setFinish()
        .attr({
            fill: '#EC2828',
            stroke: '#E5DBDB'
        });

paper.rect(480, 10, 400, 400)
        .attr({
            stroke: 'grey',
            'stroke-width': 5
        });
function drawSpiral(cx, cy, b) {
    var centralPoints = 'M' + cx + ' ' + cy,
            spiralPoints = [centralPoints];
    var x, y;
    for (var i = 0; i < 720; i += 1) {
        var angel = 0.1 * i;
        x = cx + (b * angel) * Math.sin(angel);
        y = cy + (b * angel) * Math.cos(angel);

        spiralPoints.push('L' + x + ' ' + y);
    }
    var spiralPointsStr = spiralPoints.join(' ');
    return paper.path(spiralPointsStr);
}
drawSpiral(670, 210, 2);