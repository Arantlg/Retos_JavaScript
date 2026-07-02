const num1=86;
const num2=5;
let resultado;

const opciones=[1, 2, 3, 4, 8, 0];
let i=0;
let opcion;

do{
    opcion=opciones[i];
    console.log("------Opciones------")

    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Mutiplicar");
    console.log("4. Dividir");
    console.log("0. Suma");
    console.log(`Elegiste la opcion ${opcion} \n`);

    console.log("------Resultado------ \n")

    switch (opcion) {
        case 1:
            resultado=num1+num2;
            console.log(`${num1} + ${num2} = ${resultado}\n`);
            break;

         case 2:
            resultado=num1-num2;
            console.log(`${num1} - ${num2} = ${resultado}\n`);
            break;

        case 3:
            resultado=num1*num2;
            console.log(`${num1} * ${num2} = ${resultado}\n`);
            break;

        case 4:
            resultado=num1/num2;
            console.log(`${num1} / ${num2} = ${resultado}\n`);
            break;
        
         case 0:
            console.log(`Hasta la proxima \n`);
            break;

        default:
            console.log(`Opcion ${opcion} invalida \n`)
            break;
    }
    console.log("--------------------- \n")
    i++
}while( opcion!=4);