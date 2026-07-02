const ganancia=2000000;


let quincena = ganancia/2;
const mensquincena=`El salario en bruto es de ${quincena}`;

const salud = quincena*0.04;
const mensalud=`Se descuenta ${salud} para la salud`;

const pension = quincena*0.04;
const menspension=`Se descuenta ${pension} para la pensión`;

const prestamo = 100000;

const descuento=salud+pension+prestamo;
const mensdescuento=`Se descuenta en total ${descuento}`;

quincena-=descuento;
const mensajefin=`Lo que gana en neto es de ${quincena}`;

console.log(mensquincena);
console.log(mensalud);
console.log(menspension);
console.log(mensdescuento);
console.log(mensajefin);