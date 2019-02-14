class template {
    constructor() {
        this.x; 
        this.y;
        this.px;
        this.py;
        this.radius;
        this.n;
        this.circles = document.getElementById('circle');
        this.loop = this.circles.value; 
        this.square = document.getElementById('square').checked;
        this.saw = document.getElementById('saw').checked;
        this.cube = document.getElementById('cube').checked;
    }

    Reset() {
        this.x=0; 
        this.y=0;
        this.px=0;
        this.py=0;
    }

    updateValues() {
        this.square = document.getElementById('square').checked;
        this.saw = document.getElementById('saw').checked;
        this.cube = document.getElementById('cube').checked; 
        this.loop = this.circles.value;
        theta = 0;
    }

    cubedWave() {
        for(let i=0;i<this.loop;i++) {
            this.n = i+1
            this.px = this.x;
            this.py = this.y;
            this.radius = 5 * (2*(Math.pow(this.n,2)*Math.pow(PI,2)-6)/(Math.pow(-1,this.n)*Math.pow(this.n,3)))
            ellipse(this.x, this.y, this.radius);
            this.x += this.radius * Math.cos(this.n*theta);
            this.y += this.radius * Math.sin(this.n*theta);
            line(this.px, this.py, this.x, this.y);   //radius
        }
        plot.push(this.y);
        if(plot.length>450)
            plot.splice(0,1);
    }

    sawtoothWave() {
        for(let i=0;i<this.loop;i++) {
            this.n = i+1
            this.px = this.x;
            this.py = this.y;
            this.radius = 80 * (2 / (Math.pow(-1,this.n) * this.n * PI));
            ellipse(this.x, this.y, this.radius);
            this.x += this.radius * Math.cos(this.n*theta);
            this.y += this.radius * Math.sin(this.n*theta);
            line(this.px, this.py, this.x, this.y);   //radius
        }
        plot.push(this.y);
        if(plot.length>450)
            plot.splice(0,1);
    }

    squareWave() {
        for(let i=0;i<this.loop;i++) {
            this.n = 2*i+1
            this.px = this.x;
            this.py = this.y;
            this.radius = 80 * (4 / (this.n * PI));
            ellipse(this.x, this.y, this.radius);
            this.x += this.radius * Math.cos(this.n*theta);
            this.y += this.radius * Math.sin(this.n*theta);
            line(this.px, this.py, this.x, this.y);   //radius
        }
        plot.push(this.y);
        if(plot.length>450)
            plot.splice(0,1);
    }

    show() {
        fill(255,255,0);                  //highlight color
        strokeWeight(1);
        stroke(255,255,0);
        line(this.x, this.y, 300, this.y);    //pointer line           
        noStroke();
        ellipse(this.x, this.y, 3);         //pointer tail
        stroke(255);
        strokeWeight(1.5);
        noFill();
        var xcoord = 0;
        stroke(255);
        beginShape();
        for(let i = plot.length; i >= 0; i--) { 
            vertex(300+xcoord, plot[i]);
            xcoord++;
        }
        endShape();
        noStroke();
        fill(255,255,0);
        ellipse(300,this.y,3);      //pointer head
    }
}