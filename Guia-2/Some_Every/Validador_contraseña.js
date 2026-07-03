const contrasenias = [
  "MiContraseña",       
  "Qw3rty$2024",          
  "P@sw0rd",      
  "Admin@789",    
  "miclaveconfidencial"    
];

const longitud=contrasenias.every(c=> c.length>=8);
contrasenias.forEach((c,i) =>{
    console.log(contrasenias[i]," tiene  ",contrasenias[i].length," caracteres");
});
console.log("¿Todas tienen más de 8 caracteres?: ",longitud);

console.log("------")

const tNumeros = contrasenias.some(c => /[0-9]/.test(c));
console.log("¿Contienen algunos números?: ",tNumeros);

console.log("------")


function esFuerte(p){
    const long=p.length>=8;
    const num=/[0-9]/.test(p)
    const mayus=/[A-Z]/.test(p);
    return long&&num&&mayus;
}

contrasenias.forEach(c => {
  console.log(`${c}: ${esFuerte(c) ? "Fuerte" : "Débil"}`);
  console.log("------")

});

console.log("¿Todas las contraseñas son fuertes?: ",contrasenias.every(c=>esFuerte(c)))

