function agregarPuro(acumulador, precio, cantidad) {
    return acumulador + precio * cantidad;
}

let total = 0;
total = agregarPuro(total, 5000, 3);   
total = agregarPuro(total, 2500, 5); 
total = agregarPuro(total, 10000, 2); 

console.log(total);