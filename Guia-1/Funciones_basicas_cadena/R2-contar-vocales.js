function contarVocales(texto) {
    const textoMinusculas = texto.toLowerCase();
    let contador = 0;

    for (let i = 0; i < textoMinusculas.length; i++) {
        const caracterActual = textoMinusculas.charAt(i);

        if (caracterActual === 'a' || 
            caracterActual === 'e' || 
            caracterActual === 'i' || 
            caracterActual === 'o' || 
            caracterActual === 'u') {
            contador++;
        }
    }

    return contador;
}

const frase1 = "JavaScript es genial";
const frase2 = "Configurando el entorno de Node";
const frase3 = "LOGICA DE PROGRAMACION";

console.log(`--- Resultados del Contador ---`);
console.log(`La frase "${frase1}" tiene ${contarVocales(frase1)} vocales.`);
console.log(`La frase "${frase2}" tiene ${contarVocales(frase2)} vocales.`);
console.log(`La frase "${frase3}" tiene ${contarVocales(frase3)} vocales.`);