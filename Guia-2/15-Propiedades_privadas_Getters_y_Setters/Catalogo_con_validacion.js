class Producto{
     #nombre;
     #precio;

    constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }

    set nombre(nom){
        if (nom !== '') {
            this.#nombre = nom;
        } else {
            console.log("El nombre debe estar relleno");
        }
    }

    get nombre(){
        return this.#nombre;
    };

    set precio(pre){
        if (pre >= 0) {
            this.#precio = pre;
        } else {
            console.log("El precio debe ser positivo");
        }
    }

    get precio(){
        return this.#precio;
    }

    get precioConIVA(){
        return this.#precio+(this.#precio*0.19);
    }
}

console.log('--- PRODUCTO 1 ---');
const producto1 = new Producto('Jabón', 3500);
console.log('Nombre:', producto1.nombre);
console.log('Precio:', producto1.precio);
console.log('Precio con IVA:', producto1.precioConIVA);

console.log('--- Modificación ---');

producto1.nombre = 'Jabón Antibacterial';
producto1.precio = 4200;
console.log('Nombre:', producto1.nombre);
console.log('Precio:', producto1.precio);
console.log('Precio con IVA:', producto1.precioConIVA);

console.log('--- PRODUCTO 2 ---');
const producto2 = new Producto('Shampoo', 8900);
console.log('Nombre:', producto2.nombre);
console.log('Precio:', producto2.precio);
console.log('Precio con IVA:', producto2.precioConIVA);

console.log('--- Modificación ---');
producto2.nombre = '';
console.log('Nombre:', producto2.nombre);

console.log('--- PRODUCTO 3 ---');
const producto3 = new Producto('Crema Dental', 5200);
console.log('Nombre:', producto3.nombre);
console.log('Precio:', producto3.precio);
console.log('Precio con IVA:', producto3.precioConIVA);

console.log('--- Modificación ---');
producto3.precio = -100;
console.log('Precio:', producto3.precio);

console.log('--- PRODUCTO 4 ---');
const producto4 = new Producto('', -50);
console.log('Nombre:', producto4.nombre);
console.log('Precio:', producto4.precio);