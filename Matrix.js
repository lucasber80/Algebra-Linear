class Matrix{
    
    constructor( rows , cols, values){ 
        this. rows =  rows
        this.cols = cols
        
        if(values == undefined){
            this.values = []
            for( var i = 0; i < this.cols * this. rows;i++){
                this.values.push(0)
            }
        }else{
            if(values.length == this. rows * this.cols){
                this.values = values
            }else{
                throw "A quantidade de elementos é incompativel com o tamanho da matriz"
            }

            
        }

    }

    get(i,j){
        return this.values[this.getIndex(i,j)]
    }
    
     set(i,j,value){
        this.values[this.getIndex(i,j)] = value
    }
    
     getIndex(i,j){
         if(i < 1 || i > this. rows) throw "o numero de linhas nao correspondem com a matriz"
         if(j < 1 || j > this.cols) throw "o numero de colunas nao correspondem com a matriz"
        return (j - 1) + (i - 1) * this.cols
    }

}


