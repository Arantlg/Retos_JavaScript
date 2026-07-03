const producto = {
    nombre : 'Leche',
    precio : 2500,
    stock : 50,
    categoria : 'Lacteo',

    precioFinal(descuento) {
        return this.precio - (this.precio * (descuento / 100));
    },

    disponible() {
        return this.stock > 0;
    }
};

console.log("El precio final es de:", producto.precioFinal(20));
console.log("¿Está disponible?:", producto.disponible());
