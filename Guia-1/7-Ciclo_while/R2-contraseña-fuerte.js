const contrasenias= ['hola', '123', 'abc12345', 'ContraseñaFuerte2026'];

let i=0;
let descarte=0;
let encontrada= null;

while (i<contrasenias.length){
    if (contrasenias[i].length >=8) {
        encontrada=contrasenias[i];
        break;
    }else{
        descarte++;
    }
    i++
}

if (encontrada){
    console.log(`Contraseña aceptada: "${encontrada}"`);
    console.log(`Se tuvo ${descarte} intentos`);
}else{
   console.log("No se encontró ninguna contraseña que cumpla los requisitos");
    console.log(`Se descartaron las ${descarte} contraseñas enviadas.`); 
}
