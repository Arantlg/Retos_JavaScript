const min=1;
const max=100;
let intentos=0;

let numeros;


do {

    for (let i=0 ; i<10 ; i++){
        numeros= Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (numeros<10) {
            console.log(`¡Exacto! el número ${numeros} es menor a 10`);
        
    } else {
            console.log(`El número ${numeros} es mayor que 10`);

    }

    intentos++;

} while (numeros>10);



if (numeros<10) {
    console.log(`Se hicieron ${intentos} intentos`);

        
} else {
    console.log(`Se agotarón los ${intentos} intentos.`)        
}

    

