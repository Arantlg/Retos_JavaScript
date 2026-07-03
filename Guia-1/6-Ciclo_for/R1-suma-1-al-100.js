let suma=0;
let multiplo5=0;

for(let i=1 ; i<=100 ; i++){
    suma+=i;
    if (i%5==0){
        multiplo5++;
    }
}

console.log(`El resultado de la suma del 1 al 100 es de ${suma}`);
console.log(`Se encontraron ${multiplo5} en total`);
