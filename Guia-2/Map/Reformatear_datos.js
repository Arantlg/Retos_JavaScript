// Tienes un array de 5 usuarios con firstName, lastName y birthYear. Crea otro 
// array donde cada usuario tenga nombre (concatenando first + last), edad (calculada 
// con new  Date().getFullYear()  -  birthYear) y mayorDeEdad (booleano). El 
// array original no debe alterarse.

const usuarios = [
  { firstName: "Mariana", lastName: "Gómez",    birthYear: 1998 },
  { firstName: "Santiago", lastName: "Rodríguez", birthYear: 2001 },
  { firstName: "Valentina", lastName: "López",   birthYear: 1995 },
  { firstName: "Andrés",   lastName: "Martínez", birthYear: 2023 },
  { firstName: "Camila",   lastName: "Hernández", birthYear: 1999 }
];

const nuevoUsuario = usuarios.map(u=>({
  nombreCompleto: u.firstName + " " + u.lastName,
  edad: new Date().getFullYear() - u.birthYear,
  mayorEdad: new Date().getFullYear() - u.birthYear > 18
}));

console.log("---Orignal---")
usuarios.forEach((usu)=>{
    console.log(`Nombre: ${usu.firstName} - Apellido: ${usu.lastName} - Fecha nacimiento: ${usu.birthYear}`);
})

console.log("---Modificado---")
nuevoUsuario.forEach((nUsu)=>{
    console.log(`Nombre:${nUsu.nombreCompleto} - Edad: ${nUsu.edad} - Mayor de edad: ${nUsu.mayorEdad}`);
})

