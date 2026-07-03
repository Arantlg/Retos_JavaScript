const tipoVehiculo ="moto";
const horas=4;

const valor = tipoVehiculo==="carro" ? 3000:
tipoVehiculo==="moto" ? 1500:
tipoVehiculo==="bicicleta" ? 0:
"Vehiculo no valido";

const valorTotal= valor*horas;

console.log(`Usted pagá una cantidad de ${valorTotal}`);