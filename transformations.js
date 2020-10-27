class Transformations extends LinearAlgebra{

    reflection2Dy(vector){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 2 dimensões"
        }

    }

    reflection2Dx(vector){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 2 dimensões"
        }

    }

    reflection3Dx(vector) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }

    reflection3Dy(vector) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }
    
    
    reflection3Dz(vector) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }

    scale2Dx(vector, value) {
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[value,0,0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 2 dimensões"
        }
    }

    scale2Dy(vector, value) {
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,0,0,0,value,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 2 dimensões"
        }
    }

    scale3Dx(vector, value) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[value,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }

    scale3Dy(vector, value) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,0,0,value,0,0,0,0,1,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }

    scale3Dz(vector, value) {
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,value,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
            throw "o vetor precisa ter 3 dimensões"
        }
    }

    

    projection2Dx(vector){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,0,0,0,0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }

    }

    projection2Dy(vector){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[0,0,0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }

    }

    rotation2D(vector,value){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[Math.cos(value),-1 * Math.sin(value),0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }

    }


    shearingx(vector,value){
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,value,0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return matrix
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }
    }

    shearingy(vector,value){
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,0,0,value,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }
    }

    translate2D(vector, dx, dy){
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }
    }

    translate3D(vector, dx, dy, dz){
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 3 dimensões"
        }
    }

    rotation2D(vector,value){
        
        if(vector.size == 2){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),1])
             //cria a matrix de multiplicação
            var b = new Matrix(3,3,[Math.cos(value),-1 * Math.sin(value),0,0,1,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(2,[matrix.get(1,1),matrix.get(2,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 2 dimensões"
        }

    }


    rotation3Dx(vector, value){
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[1,0,0,0,0,Math.cos(value),-1 * Math.sin(value),0,0,Math.sin(value),Math.cos(value),0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 3 dimensões"
        }
    }

    rotation3Dy(vector, value){
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[Math.cos(value),0, Math.sin(value),0,0,1,0,0,-1 * Math.sin(value),0,Math.cos(value),0,0,0,0,1])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 3 dimensões"
        }
    }


    rotation3Dz(vector, value){
        if(vector.size == 3){
            //transforma em vetor homogeneo
            let c = new Vector(vector.size + 1,[vector.get(1),vector.get(2),vector.get(3),1])
             //cria a matrix de multiplicação
            var b = new Matrix(4,4,[Math.cos(value),-1 * Math.sin(value),0,0,Math.cos(value),Math.sin(value),0,0])
            //multiplica
            var matrix = this.dot(b,c) 
            //volta o vetor para coordenadas cartesianas
            var vetor = new Vector(3,[matrix.get(1,1),matrix.get(2,1),matrix.get(3,1)])
            return vetor
        }else{
           throw "o vetor precisa ter 3 dimensões"
        }
    }




    

    

  








}