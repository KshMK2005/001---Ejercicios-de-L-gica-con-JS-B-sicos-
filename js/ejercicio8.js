let suma=0;
let cadena = "";

for(let i=1; i<=100; i++){
suma +=1;

if(i==100){

    cadena += i;

    }else{
        cadena += i + "+";
    }
}


console.log("La suma de los numeros es:"+suma );
console.log("la suma de los numeros usados es "+ cadena );
 