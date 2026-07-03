function contarHasta(n) {
    if (n < 0) return;
    console.log(n);
    contarHasta(n - 1);
}

function contarRango(desde, hasta) {
    console.log(desde);
    if (desde === hasta) return;

    if (desde < hasta) {
        contarRango(desde + 1, hasta);
    } else {
        contarRango(desde - 1, hasta);
    }
}

console.log("-- Contar hasta 5 ---")
contarHasta(5);

console.log("-- Contar de 1 hasta 5 ---")
contarRango(1, 5);

console.log("-- Contar de 5 hasta 1 ---")
contarRango(5, 1);

