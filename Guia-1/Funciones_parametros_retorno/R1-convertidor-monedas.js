const pesos=50000;
const tasa=4100;


function pesosADolares(pesos, tasa){
    let dolar;
    dolar=pesos/tasa;
    return dolar.toFixed(2);
}

console.log(`${pesos} son ${pesosADolares(pesos,tasa)} dólares`)