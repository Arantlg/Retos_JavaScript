const nombre="  mArÍa    dEl  cArMeN     dE   lA     sAnTíSiMa   tRiNiDaD";
const limpio = nombre.trim();
const separado= limpio.split(' ');

const palabrasLimpias = [];

for (let i = 0; i < separado.length; i++) {
   const palabraActual = separado[i];
    if (palabraActual !== '') {
        const capitalizado = palabraActual.charAt(0).toUpperCase() + palabraActual.slice(1).toLowerCase();
        palabrasLimpias.push(capitalizado);
    }

}

const final = palabrasLimpias.join(' ');


console.log(`Nombre ingresado: "${nombre}"`);
console.log(`Nombre sin extremos: "${limpio}"`);
console.log(`Array de palabras procesadas:`, palabrasLimpias);
console.log(`Nombre final limpio: "${final}"`);