const edad=19;
const cuentaActiva=false;
const admin=true;

puedeEntrar= edad > 18 && cuentaActiva || admin ;
console.log("¿Puede entrar? ", puedeEntrar)