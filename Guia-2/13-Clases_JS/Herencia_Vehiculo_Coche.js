class Vehiculo{
    constructor(marca,modelo,anio){
        this.marca=marca,
        this.modelo=modelo,
        this.anio=anio
    }

    descripcion(){
        return `Especificaciones:\n Marca ${this.marca} \n Modelo: ${this.modelo} \n Año: ${this.anio}`;
    }
};

class Auto extends Vehiculo{
    constructor(marca,modelo,anio,puertas,electrico){
        super(marca,modelo,anio);
        this.puertas=puertas;
        this.electrico=electrico;
    }
    descripcion() {
        return `${super.descripcion()}\n Puertas: ${this.puertas}\n Eléctrico: ${this.electrico}`;
    }
};

const vehiculo1 = new Vehiculo('Yamaha', 'FZ', 2020);
const vehiculo2 = new Vehiculo('Suzuki', 'GN125', 2018);

const auto1 = new Auto('Toyota', 'Corolla', 2022, 4, false);
const auto2 = new Auto('Tesla', 'Model 3', 2023, 4, true);

console.log('--- Vehiculo 1 ---')
console.log(vehiculo1.descripcion());

console.log('--- Vehiculo 2 ---')
console.log(vehiculo2.descripcion());

console.log('--- Coche 1 ---')
console.log(auto1.descripcion());

console.log('--- Coche 2 ---')
console.log(auto2.descripcion());