const carrito = [
  { nombre: "Camiseta", precio: 25000, cantidad: 2 },
  { nombre: "Pantalón", precio: 60000, cantidad: 1 },
  { nombre: "Gorra", precio: 15000, cantidad: 3 }
];

const pagoTotal= carrito.reduce((acc,c)=> acc+(c.precio*c.cantidad), 0);
console.log(`En total se paga: `,pagoTotal);

const itemsTotal= carrito.reduce((acc,c)=> acc+c.cantidad,0);
console.log("Hay en total ", itemsTotal," items")

const cantidades= carrito.reduce((acc,c)=>{
   acc[c.nombre] = (acc[c.nombre] || 0) + c.cantidad; 
    return acc; 
}, {}); 

console.log(`Cantidades por item:`, cantidades);