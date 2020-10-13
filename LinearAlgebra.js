class LinearAlgebra {

    //troca linha por coluna
    transpose(a) {
        let c = new Matrix(a.cols, a.rows)

        for (let i = 1; i <= c.rows; i++) {
            for (let j = 1; j <= c.cols; j++) {

                c.set(i, j, a.get(j, i))
            }
        }
        return c

    }

    //soma matriz elemento a elemento
    plus(a, b) {
        if (a.rows != b.rows || a.cols != b.cols) throw "As matrizes sao incompativeis"

        let c = new Matrix(a.rows, a.cols)

        for (let i = 1; i <= c.rows; i++) {
            for (let j = 1; j <= c.cols; j++) {

                c.set(i, j, a.get(i, j) + b.get(i, j))
            }
        }
        return c
    }

    //multiplica matriz elemento a elemento
    times(a, b) {
        if (typeof b != "object" || !(b instanceof Matrix)) {
            throw "o segundo parametro deve ser uma matriz"
        }

        let c = new Matrix(a.rows, a.cols)

        if (typeof a == "number") {
            for (let i = 1; i <= c.rows; i++) {
                for (let j = 1; j <= c.cols; j++) {

                    c.set(i, j, a.get(i, j) * k)
                }
            }
        } else if (typeof a == "object" && a instanceof Matrix) {
            for (let i = 1; i <= c.rows; i++) {
                for (let j = 1; j <= c.cols; j++) {

                    c.set(i, j, a.get(i, j) * b.get(i, j))
                }
            }

        } else {
            throw "o primeiro parametro deve ser um escalar numero ou uma matriz"
        }

        return c

    }

    //multiplica uma linha
    multOneRowVoid(matriz, linha, k) {

        for (let i = 1; i <= matriz.cols; i++) {

            matriz.set(linha, i, matriz.get(linha, i) * k);
        }
    }



    //soma duas linhas
    somaRow(matriz, linha1, linha2) {

        let c = new Matrix(matriz.rows, matriz.cols, matriz.values.slice())

        for (let i = 1; i <= matriz.cols; i++) {

            c.set(linha2, i, c.get(linha1, i) + c.get(linha2, i));
        }

        return c;
    }

    //troca linhas
    trocarLinha(matriz, linha1, linha2) {

        

        for (let i = 1; i <= matriz.cols; i++) {
            var aux = matriz.get(linha1, i);
            matriz.set(linha1, i, matriz.get(linha2, i));
            matriz.set(linha2, i, aux);
        }

       
    }

    // multiplica linha1 por uma constante k e soma com a linha2
    naoSei(matriz, linha1, linha2, k) {
        let c = new Matrix(matriz.rows, matriz.cols, matriz.values.slice())

        //multiplica linha por constante
        for (let i = 1; i <= c.cols; i++) {

            c.set(linha1, i, c.get(linha1, i) * k);
        }
        //soma com outra linha
        for (let i = 1; i <= matriz.cols; i++) {

            matriz.set(linha2, i, c.get(linha1, i) + matriz.get(linha2, i));
        }

    }

    //zera a triangular inferior da matriz
    trianguloInferior(matriz) {
        for (let j = 1; j <= matriz.cols - 2; j++) {
            for (let i = j + 1; i <= matriz.rows; i++) {

                if(matriz.get(j, j) == 0){
                    this.trocarLinha(matriz,j,i);
                }else{
                    this.naoSei(matriz, j, i, this.k(matriz.get(j, j),matriz.get(i, j)));
                }

             }
            
         }
    }


    coluna(matriz) {
        let a = []
        for (var i = 1; i <= matriz.rows; i++) {
            a.push(matriz.get(i, matriz.cols));
        }
        return a
    }



    //zera a triangular superior da matriz
    trianguloSuperior(matriz) {
        for (let j = matriz.cols - 1; j >= 2; j--) {
            for (let i = j - 1; i >= 1; i--) {
                if(matriz.get(j, j) == 0){
                    this.trocarLinha(matriz,j,i);
                }else{
                    this.naoSei(matriz, j, i, this.k(matriz.get(j, j),matriz.get(i, j)));
                }
            }


        }

    }

    gerarResultante(matriz) {
        for (var i = 1; i <= matriz.rows; i++) {
            this.multOneRowVoid(matriz, i, 1 / matriz.get(i, i))
        }

       
    }


    solve(matriz) {
        let c = new Matrix(matriz.rows, matriz.cols, matriz.values.slice())

        //triangulo superior
        this.trianguloSuperior(c)

        //triangulo inferior
        this.trianguloInferior(c)

        //transforma em 1
        this.gerarResultante(c)

        return c;
    }


    k(a, b) {
        return -b / a
    }


    //divie matriz elemento a elemento
    div(a, b) {
        if (typeof a != "object" || !(a instanceof Matrix || typeof b != "object" || !(b instanceof Matrix))) {
            throw "os parametros devem ser do tipo matriz"
        }

        if (a.rows != b.rows || a.cols != b.cols) {
            throw "as matrizes sao incompativeis"
        }

        for (let i = 0; i < b.values.length; i++) {
            if (b.values[i] == 0) {
                throw "a matriz b contem elemento nulo"
            }
        }

        let c = new Matrix(a.rows, a.cols)

        for (let i = 1; i <= c.rows; i++) {
            for (let j = 1; j <= c.cols; j++) {

                c.set(i, j, a.get(i, j) / b.get(i, j))
            }
        }

        return c;

    }

    dot(a, b) {
        if (a.cols != b.rows) {
            throw "a quantidade de colunas da matriz A é diferente da quantidade de linhas da matriz B"
        }
        let c = new Matrix(a.rows, b.cols);

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= b.cols; j++) {
                for (var k = 1; k <= a.cols; k++) {
                    c.set(i, j, c.get(i, j) + (a.get(i, k) * b.get(k, j)))
                }
            }
        }
        return c;


    }

    determinante(matriz){
        if(matriz.cols != matriz.rows) throw "matriz precisa ser quadrada"

        let c = new Matrix(matriz.rows, matriz.cols, matriz.values.slice())

        let det = 1;
        
        //zerar triangular inferior
        for (let j = 1; j <= c.rows; j++) {
            for (let i = j + 1; i <= c.rows; i++) {

                if(c.get(j, j) == 0){
                    this.trocarLinha(c,j,i);
                    det *= -1;
                }else{
                    this.naoSei(c, j, i, this.k(c.get(j, j),c.get(i, j)));
                }

             }
            
         }

        //multiplica a diagonal
        for(let i = 1;i <= c.cols;i++){
         det *= c.get(i,i);
        }

        console.log(det);
    }

    inversa(matriz){
        if(matriz.cols != matriz.rows) throw "matriz precisa ser quadrada"

        let c = this.juntarMatriz(matriz)
        
        //triangulo inferior
         for (let j = 1; j <= c.cols/2 - 1; j++) {
            for (let i = j + 1; i <= c.rows; i++) {

                if(c.get(j, j) == 0){
                    this.trocarLinha(c,j,i);
                }else{
                    this.naoSei(c, j, i, this.k(c.get(j, j),c.get(i, j)));
                }

             }
            
         }

         //triangular superior
         for (let j = c.cols/2 ; j >= 2; j--) {
            for (let i = j - 1; i >= 1; i--) {
                if(c.get(j, j) == 0){
                    this.trocarLinha(c,j,i);
                }else{
                    this.naoSei(c, j, i, this.k(c.get(j, j),c.get(i, j)));
                }
            }


        }

        for (var i = 1; i <= c.rows; i++) {
            this.multOneRowVoid(c, i, 1 / c.get(i, i))
        }
 
        
 
       
        return c;

    }
    
    //junta a matriz com sua matriz indentidade
    juntarMatriz(matriz){
        let c = new Matrix(matriz.rows, matriz.cols*2,)

        for(let i = 1;i <= c.cols/2;i++){
            for(let j = 1;j <= c.rows;j++){

                    c.set(j,i,matriz.get(j,i))
                }
            }

            for(let i = c.cols/2 + 1;i <= c.cols;i++){
                for(let j = 1;j <= c.rows;j++){
                        if(i - c.cols/2  == j){
                            c.set(j,i,1)
                        }
                    }
                }

        return c;

    }
}