function conTimeout(promesa, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), ms);
    });

    return Promise.race([promesa, timeout]);
}

function tarea(resultado, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(resultado), ms);
    });
}

conTimeout(tarea('Dato recibido', 200), 500)
    .then((resultado) => console.log('Caso 1:', resultado))
    .catch((error) => console.log('Caso 1 :', error.message));

conTimeout(tarea('Dato recibido', 800), 300)
    .then((resultado) => console.log('Caso 2 :', resultado))
    .catch((error) => console.log('Caso 2 :', error.message));