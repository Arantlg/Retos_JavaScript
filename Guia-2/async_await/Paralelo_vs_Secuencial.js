function tarea(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(nombre), ms);
    });
}

async function enSerie() {
    const inicio = Date.now();

    const r1 = await tarea('A', 500);
    const r2 = await tarea('B', 300);
    const r3 = await tarea('C', 400);

    const total = Date.now() - inicio;
    console.log('Serie:', r1, r2, r3, `- Tiempo: ${total} ms`);
    return total;
}

async function enParalelo() {
    const inicio = Date.now();

    const [r1, r2, r3] = await Promise.all([
        tarea('A', 500),
        tarea('B', 300),
        tarea('C', 400)
    ]);

    const total = Date.now() - inicio;
    console.log('Paralelo:', r1, r2, r3, `- Tiempo: ${total} ms`);
    return total;
}

async function comparar() {
    const tiempoSerie = await enSerie();
    const tiempoParalelo = await enParalelo();

    console.log(`Diferencia: ${tiempoSerie - tiempoParalelo} ms`);
}

comparar();