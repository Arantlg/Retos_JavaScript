const num1 = 20;
const num2 = 5;
const operador = "/";

let resultado;

switch (operador) {

    case "+":
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;

    case "-":
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;

    case "*":
        resultado = num1 * num2;
        console.log(`${num1} * ${num2} = ${resultado}`);
        break;

    case "/":
        if (num2 === 0) {

            console.log("No se puede dividir entre 0");

        } else {

            resultado = num1 / num2;
            console.log(`${num1} / ${num2} = ${resultado}`);

        }

        break;

    default:
        console.log("Operador no válido");

}