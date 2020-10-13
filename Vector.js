class Vector{

    constructor( dim, values){ 
        this.values = values;
       
        
        if(values == undefined){
            this.values = [dim]
            for( var i = 0; i < this.i;i++){
                this.values.push(0)
            }
        }else{
            if(values.length == i){
                this.values = values
            }else{
                throw "A quantidade de elementos é incompativel com o tamanho do vetor"
            }

            
        }

    }

    get(i){
        return this.values[i]
    }
    
     set(i,values){
        this.values[i] = values;
    }


}