let palabra = prompt("ingresa una palabra");

function palindromo(str){
    let palabraReversa = str.split('').reverse().join('');
    return str === palabraReversa;
}

if (palindromo(palabra)){
    console.log("La palabra " + palabra + " es un palindromo");
} else {
    console.log("La palabra " + palabra + " no es un palindromo");
}
