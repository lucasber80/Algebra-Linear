class rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;

        this.points = [];
        this.points.push(new Vector(2, [this.x, this.y]))
        this.points.push(new Vector(2, [this.x, this.y + this.h]))
        this.points.push(new Vector(2, [this.x + this.w, this.y + this.h]))
        this.points.push(new Vector(2, [this.x + this.w, this.y]))


    }

    draw() {
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        endShape();

        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        endShape();

    }

    rotation(value) {
        var t = new Transformations();


        for (var i = 0; i < this.points.length; i++) {

            this.points[i] = t.rotation2D(this.points[i], value);

        }


    }

    rotation2(value) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], (this.x * -1) + (this.w / 2 * -1), (this.y * -1) + (this.h / 2 * -1));

        }

        for (var i = 0; i < this.points.length; i++) {

            this.points[i] = t.rotation2D(this.points[i], value);

        }

        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], this.x + this.w / 2, this.y + this.h / 2);

        }


    }

    translate(dx, dy) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], dx, dy);

        }
    }


}


class triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

        this.points = [];
        this.points.push(new Vector(2, [this.x1, this.y1]))
        this.points.push(new Vector(2, [this.x2, this.y2]))
        this.points.push(new Vector(2, [this.x3, this.y3]))


    }

    draw() {
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        endShape();

    }

    rotation(value) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.rotation2D(this.points[i], value);

        }
    }

    translate(dx, dy) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], dx, dy);

        }
    }


}

class line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.points = [];
        this.points.push(new Vector(2, [this.x1, this.y1]))
        this.points.push(new Vector(2, [this.x2, this.y2]))

    }

    draw() {
        stroke(255, 255, 255)
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2))
        vertex(this.points[1].get(1), this.points[1].get(2))
        endShape();
    }

    rotation(value) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.rotation2D(this.points[i], value);

        }
    }

    translate(dx, dy) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], dx, dy);

        }
    }

    rotation2(value) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            
            
            this.points[i] = t.translate2D(this.points[i], this.x1 * -1 - ((this.x2 - this.x1)/2) ,-50);
            
            this.points[i] = t.rotation2D(this.points[i], value);

            this.points[i] = t.translate2D(this.points[i], 55 ,50);
            
            
        }

        
      }

}

class circle {
    constructor(x, y, r, t) {
        var trans = new Transformations();
        this.x = x;
        this.y = y;
        this.x2 = x+r;
        this.d = r * 2;
        this.r = r;
        this.t = t;
        if(t < 3){
            throw "o circulo precisa ter mais que 3 triangulos"
        }
        this.points = [];
        this.points.push(new Vector(2, [x, y]))
        this.points.push(new Vector(2, [x + r, y]))
        for (var i = 1; i < t; i++) {
            
            this.points[i] = trans.translate2D(this.points[i], this.x * -1 - ((this.x2 - this.x)/2) ,-this.y);
            
            this.points.push(trans.rotation2D(this.points[i], 360 / t));

            this.points[i] = trans.translate2D(this.points[i], this.x  + ((this.x2 - this.x)/2) ,this.y);

        }

    }

    draw() {

        stroke(255, 255, 255)
        for (var i = 1; i < this.points.length - 1; i++) {
            beginShape();
            vertex(this.points[i].get(1), this.points[i].get(2))
            vertex(this.points[0].get(1), this.points[0].get(2))
            vertex(this.points[i + 1].get(1), this.points[i + 1].get(2))
            endShape();

        }

    }

    translate(dx, dy) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.translate2D(this.points[i], dx, dy);

        }
    }

    rotation(value) {
        var t = new Transformations();
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = t.rotation2D(this.points[i], value);

        }
    }



}