function cargarDato(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Dato ${nombre} listo`);
        }, ms);
    });
}

cargarDato('A', 300)
    .then((resultado) => {
        console.log(resultado);
        return cargarDato('B', 500);
    })
    .then((resultado) => {
        console.log(resultado);
        return cargarDato('C', 200);
    })
    .then((resultado) => {
        console.log(resultado);
    });