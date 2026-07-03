class Sensor{
    static cantidadSensores=0;
    constructor(tipo){
        this.tipo=tipo;
        this.id=++Sensor.cantidadSensores;
        this.lectura=[];
    }

    registrar(valor){
        this.lectura.push(valor);
    }

    ultima(){
        return this.lectura.length > 0 ? this.lectura[this.lectura.length - 1] : null;
    }

    static crearLote(n, tipo){
        if (tipo !== 'temp' && tipo !== 'humedad') return [];
        const lote=[];
        for (let i=0 ; i<n; i++){
            lote.push(new Sensor (tipo))
        }
        return lote;
    }
}

const sensores = Sensor.crearLote(3, 'temp');

sensores.forEach((s, i) => {
    s.registrar(20 + i);
    s.registrar(21 + i);
    s.registrar(22 + i);
    s.registrar(23 + i);
});

console.log('--- Resumen de sensores ---');
sensores.forEach(s => {
    console.log(`Sensor #${s.id} (${s.tipo})`);
    console.log('  Lecturas:', s.lectura.map(l => l.toFixed(1)));
    console.log('  Última lectura:', s.ultima().toFixed(1));
});