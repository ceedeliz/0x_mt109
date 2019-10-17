console.log("diagonal difference:");
var matriz = [ [1,2,3],[4,5,6],[9,8,9]];
var res1=matriz[0][0] + matriz[1][1] + matriz [2][2] ;
var res2=matriz[0][2] + matriz[1][1] + matriz [2][0];
var res3=Math.abs(res1-res2);
console.log(res1);
console.log(res2);
console.log(res3);


console.log("Series");
console.log("49142");

var serie = [4,9,1,4,2];
var longitud = serie.length;
var cadena = ["","",""];
console.log("3 digitos");
contador = 0;
for(var i=0; i <= longitud; i++){
  
    if(contador > 1){
        contador = 0;
    }else{
        contador = contador + 1;
    }

    cadena[i] = [serie[contador]+""+serie[contador+1]+""+serie[contador+2]]    
  console.log(cadena[i]);
}
console.log("4 digitos");
contador = 0;
for(var i=0; i <= longitud; i++){
    if(contador > 0){
        contador = 0;
    }else{
        contador = contador + 1;
    }
    cadena[i] = [serie[contador]+""+serie[contador+1]+""+serie[contador+2]+""+serie[contador+3]]    
    console.log(cadena[i]);
}
console.log("5 digitos");
contador=0;
for(var i=0; i <= 0; i++){    
        cadena[i] = [serie[contador]+""+serie[contador+1]+""+serie[contador+2]+""+serie[contador+3]+""+serie[contador+4]]    
        console.log(cadena[i]);    
        contador = contador +1;
}
console.log("6 digitos");
for(var i=0; i <= 0; i++){
    cadena[i] = [serie[i]+""+serie[i+1]+""+serie[i+2]+""+serie[i+3]+""+serie[i+4]+""+serie[i+5]]    
    console.log(cadena[i]);
}

console.log("left rotation");
function rotacion(){
    cadena_inicial = [0,1,2,3,4,5,6,7,8,9,10];
    n_rotaciones =3;
    contador = 0;
    cadena_rotada = [];
    for(var i=0; i <= cadena.length+1; i++){
        if(cadena_inicial[i+n_rotaciones]){
            cadena_rotada.push(cadena_inicial[i+n_rotaciones]);
        }else{
            cadena_rotada.push(cadena_inicial[contador]);
            contador = contador + 1;
        }
    }
    var x = document.getElementById("rotacion");
    x.innerHTML = cadena_rotada;
}




