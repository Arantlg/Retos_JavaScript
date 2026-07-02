const numeroSecreto = 68;
let intentos = 0;

const numeros= [20,90,1,56,78,34,66,43,68];
let i=0;

while (numeros[i] != numeroSecreto){
    console.log(`El número ${numeros[i]} es incorrecto.`);
    intentos++;
    i++;
}   

if (numeros[i] === numeroSecreto) {
    intentos++; 
    console.log("\n-------------------------------------------");
    console.log(`¡¡Enhorabuena!! Acertaste, el número era ${numeroSecreto}`);
    console.log(`Tuviste ${intentos} intentos en total.`);
    console.log("-------------------------------------------");
} else {
    console.log("Se acabaron los intentos de la lista y no se encontró el número.");
}
