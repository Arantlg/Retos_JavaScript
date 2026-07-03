const calificaciones = [85, 92, 76, 100, 67, 88, 90, 73];

const ordenado=[...calificaciones].sort((a, b)=> a - b);

console.log(ordenado);

console.log("Las 3 mejores notas :",ordenado.slice(5,8))

console.log('Notas: ',calificaciones.join(' | '))
console.log('Notas: ',ordenado.join(' | '))


console.log('Original: ',calificaciones);

