class plane{
    constructor(x,y,z,w,h,l){
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = h;
        this.w = w;
        this.l = l;
        this.points = [];
        this.points.push(new Vector(3,[this.x,this.y,this.z]))
        this.points.push(new Vector(3,[this.x, this.y + this.h,this.z]))
        this.points.push(new Vector(3,[this.x + this.w, this.y + this.h,this.z]))
        this.points.push(new Vector(3,[this.x + this.w, this.y,this.z]))
    }

    draw(){
        beginShape();
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        endShape();
        beginShape();
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        endShape();

    }

    translate(dx,dy,dz){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){
                          
           this.points[i] = t.translate3D(this.points[i],dx,dy,dz);
             
        }
    }

    rotation3Dx(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dx(this.points[i],value);               
        }
    }

    rotation3Dy(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dy(this.points[i],value);               
        }
    }

    rotation3Dz(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dz(this.points[i],value);               
        }
    }
}






class parallelogram{
    constructor(x,y,z,w,h,l){
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = h;
        this.w = w;
        this.l = l;
        this.points = [];
        this.points.push(new Vector(3,[this.x,this.y,this.z]))
        this.points.push(new Vector(3,[this.x, this.y + this.h,this.z]))
        this.points.push(new Vector(3,[this.x + this.w, this.y + this.h,this.z]))
        this.points.push(new Vector(3,[this.x + this.w, this.y,this.z]))

        this.points.push(new Vector(3,[this.x,this.y,this.z + this.l]))
        this.points.push(new Vector(3,[this.x, this.y + this.h,this.z + this.l]))
        this.points.push(new Vector(3,[this.x + this.w, this.y + this.h,this.z + this.l]))
        this.points.push(new Vector(3,[this.x + this.w, this.y,this.z + this.l]))
    }

     draw(){
        fill(237, 34, 93);
        noStroke();
         
        beginShape();

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));

        
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));

        endShape();

        beginShape();
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3));
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));

        
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3));
       
        endShape();

        endShape();

        beginShape();
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));

        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));

       
        endShape();

        beginShape();
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        endShape();

        beginShape();
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3));

        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));

        endShape();

        beginShape();
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));

        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        endShape();
         }

         translate(dx,dy,dz){
            var t = new Transformations();
            for(var i = 0;i < this.points.length;i++){
                              
               this.points[i] = t.translate3D(this.points[i],dx,dy,dz);
                 
            }
        }

        rotation3Dx(value){
            var t = new Transformations();
            for(var i = 0;i < this.points.length;i++){                            
               this.points[i] = t.rotation3Dx(this.points[i],value);               
            }
        }

        rotation3Dy(value){
            var t = new Transformations();
            for(var i = 0;i < this.points.length;i++){                            
               this.points[i] = t.rotation3Dy(this.points[i],value);               
            }
        }

        rotation3Dz(value){
            var t = new Transformations();
            for(var i = 0;i < this.points.length;i++){                            
               this.points[i] = t.rotation3Dz(this.points[i],value);               
            }
        }
    }

class pyramid{
    constructor(x,y,z,w,h,l,hp){
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = h;
        this.w = w;
        this.l = l;
        this.hp = hp;
        this.points = [];
        
        this.points.push(new Vector(3,[this.x,this.y + this.h,this.z]))
        this.points.push(new Vector(3,[this.x,this.y+ this.h,this.z + l]))
        this.points.push(new Vector(3,[this.x + w,this.y + this.h,this.z + l]))
        this.points.push(new Vector(3,[this.x + w,this.y+ this.h,this.z]))
        this.points.push(new Vector(3,[this.x + (w/2),-this.hp,this.z + (l/2)]))
       
    }

    draw(){
        
        noStroke();
        fill(237, 34, 93);
        beginShape();

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));

        endShape();
        fill(0, 255, 0);
        beginShape();
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        endShape();

        fill(0, 0, 255);
        beginShape();
        
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        endShape();

        
        fill(255, 255, 255);
        beginShape();
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3));
        
        
        endShape();
        fill(0, 0, 0);
        beginShape();
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3));
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3));
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3));
        endShape();
    }

    translate(dx,dy,dz){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){
                          
           this.points[i] = t.translate3D(this.points[i],dx,dy,dz);
             
        }
    }

    rotation3Dx(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dx(this.points[i],value);               
        }
    }

    rotation3Dy(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dy(this.points[i],value);               
        }
    }

    rotation3Dz(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dz(this.points[i],value);               
        }
    }

}




class sphere{
    constructor(x, y, z, r, st, se){
        this.x = x
        this.y = y
        this.z = z
        this.color = "white"
        this.r = r    
        this.st = st  
        this.se = se 

        this.points = []
        var x2, y2, z2, xy
        var pi = Math.PI;
        var sectorStep = 2 * pi / this.se
        var stackStep = pi / this.st
        var stackAngle, sectorAngle
    
        for(var i = 0; i <= this.st; i++){
            stackAngle = pi / 2 - i * stackStep
            xy = this.r * Math.cos(stackAngle)
            y2 = this.y + this.r * Math.sin(stackAngle)

            for(var j = 0; j < this.se + 1; j++){
                sectorAngle = j * sectorStep
                z2 = this.z + xy * Math.cos(sectorAngle)
                x2 = this.x + xy * Math.sin(sectorAngle)
                this.points.push(new Vector(3, [x2, y2, z2]))
            }
        }

       
    }
      draw(){
        fill(this.color)
        

        beginShape(TRIANGLES)
        var k1, k2
        for(var i = 0; i < this.st; i++){
            k1 = i * (this.se + 1)
            k2 = k1 + this.se + 1

            for(var j = 0; j < this.se; j++, k1++, k2++){
                if(i != 0){
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3))
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3))
                    vertex(this.points[k1 + 1].get(1), this.points[k1 + 1].get(2), this.points[k1 + 1].get(3))
                }
    
                if(i != this.st - 1){
                    vertex(this.points[k1 + 1].get(1), this.points[k1 + 1].get(2), this.points[k1 + 1].get(3))
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3))
                    vertex(this.points[k2 + 1].get(1), this.points[k2 + 1].get(2), this.points[k2 + 1].get(3))
                }
            }
        }
        endShape()
    }

    translate(dx,dy,dz){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){
                          
           this.points[i] = t.translate3D(this.points[i],dx,dy,dz);
             
        }
    }

    rotation3Dx(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dx(this.points[i],value);               
        }
    }

    rotation3Dy(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dy(this.points[i],value);               
        }
    }

    rotation3Dz(value){
        var t = new Transformations();
        for(var i = 0;i < this.points.length;i++){                            
           this.points[i] = t.rotation3Dz(this.points[i],value);               
        }
    }

    setColor(value){
        this.color = value;
    }
}


