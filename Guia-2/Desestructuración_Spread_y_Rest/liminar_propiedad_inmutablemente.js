const producto={
    id:7,
    nombre:'Jabón',
    precio:3500,
    interno:'Costo_fabrica_1000'
};
console.log('--- Original ---');
console.log(producto);

const { interno, ...productoSinInterno } = producto;

console.log('--- Modificado ---');
console.log(productoSinInterno);

const producto1={
    stock:80,
    tipo:'Higiene personal',
    marca: 'Dove'
};

const productoCompleto={...productoSinInterno,...producto1};

console.log('--- COMPLETO ---');
console.log(productoCompleto);