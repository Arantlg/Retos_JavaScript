
function imprimirReloj() {
    const fecha = new Date();
    const dia = fecha.toLocaleDateString("es-CO");
    const hora = fecha.toLocaleTimeString("es-CO"); 
    console.log(` Día: ${dia} \n Hora: ${hora}`);
}

function imprimirFraseDelDia() {
    const frases=["El éxito es la suma de pequeños esfuerzos repetidos día tras día",
    "Haz lo que debes hacer, incluso cuando no tengas ganas..",
    "Haz de tu vida un sueño, y de tu sueño una realidad.",
    "Tu única limitación es la que tú mismo te impones.",
    "Las dificultades preparan a las personas comunes para destinos extraordinarios."];
    const min=0;
    const max=4;
    const mensaje=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`La frase del momento es: \n    “${frases[mensaje]}”`);
}

console.log("\n ----Fecha---- \n");
imprimirReloj();

console.log("\n ----Frase del dia---- \n");
imprimirFraseDelDia();
