var plot = new Array();
var Draw;
var theta = 0;
function setup() {
    var canvas = createCanvas(1000, 600);
    canvas.position(10,10);
    ellipseMode(RADIUS);
    Draw = new template();
}

function draw() {
    document.getElementById('c_info').innerHTML = 'Circles: '+Draw.circles.value;
    background(10);
    push();
        translate(250, height/2);
        stroke(255);
        strokeWeight(.5);
        noFill();
        Draw.Reset();
        if(Draw.square)
            Draw.squareWave();        
        if(Draw.saw)
            Draw.sawtoothWave();
        if(Draw.cube)
            Draw.cubedWave(); 
        Draw.show();
    pop();
    theta += 0.04;
}