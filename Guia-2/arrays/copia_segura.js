const original=[34,98,100,23,44];

const copia=[...original];

copia[1]=10;
copia[4]=67;

console.log("Original :",original);
console.log("Copia :",copia);

const referencia = original;

referencia[0]=88;
referencia[4]=9

console.log("Original :",original);
console.log("Referencia :",referencia);