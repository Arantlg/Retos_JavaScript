const votos = [
  {candidato: 'A'}, {candidato: 'B'}, {candidato: 'A'}, 
  {candidato: 'C'}, {candidato: 'B'}, {candidato: 'A'},
  {candidato: 'A'}, {candidato: 'C'}, {candidato: 'B'},
  {candidato: 'A'}, {candidato: 'B'}, {candidato: 'A'}
];

const recuento= votos.reduce((acc,c)=>{
    if(!acc[c.candidato]) acc[c.candidato]=[]
    acc[c.candidato].push(c);
    return acc
});
console.log("Votos para A: ",recuento.A.length);
console.log("Votos para B: ",recuento.B.length);
console.log("Votos para C: ",recuento.C.length);
