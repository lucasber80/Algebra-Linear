


const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const inicio = new Date().getTime()
    const file = event.target.files[0];
    
    
    if(file){
        let matrix;
        let reader = new FileReader(file);
        let firstLine = true;

        reader.onload = function(){
            let lines = reader.result.split('\n');
            
            
            for(let i = 0; i < lines.length; i++){
               
                
                if(!lines[i].startsWith('%') && lines[i] != ''){
                    let aux = lines[i].split(' ');
                   

                    if(firstLine){
                       
                        matrix = new Matrix(parseInt(aux[0]),parseInt(aux[1]))
                        firstLine = false;
                    }else{
                        matrix.set(parseInt(aux[0]),parseInt(aux[1]),parseInt(aux[2]))
                    }

                    
                }
                
            }
            let la = new LinearAlgebra();
            var a = la.solve(matrix);
            var b = la.coluna(a)
            console.log(b)
            const total = new Date().getTime() - inicio
            console.log("Foi executado em: ", total)
            
        }
        reader.readAsText(file);
    }


    
});