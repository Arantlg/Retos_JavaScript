function tiempoAleatorio() {
    return Math.floor(Math.random() * (800 - 200 + 1)) + 200;
}

function cargarUsuario() {
    return new Promise((resolve) => {
        const ms = tiempoAleatorio();
        setTimeout(() => resolve(`Usuario cargado (${ms}ms)`), ms);
    });
}

function cargarConfiguracion() {
    return new Promise((resolve) => {
        const ms = tiempoAleatorio();
        setTimeout(() => resolve(`Configuración cargada (${ms}ms)`), ms);
    });
}

function cargarMenu() {
    return new Promise((resolve) => {
        const ms = tiempoAleatorio();
        setTimeout(() => resolve(`Menú cargado (${ms}ms)`), ms);
    });
}

async function cargarParalelo() {
    const inicio = Date.now();

    const [usuario, config, menu] = await Promise.all([
        cargarUsuario(),
        cargarConfiguracion(),
        cargarMenu()
    ]);

    const total = Date.now() - inicio;
    console.log('--- Paralelo ---');
    console.log(usuario, '\n', config, '\n', menu);
    console.log(`Tiempo total: ${total} ms`);
    return total;
}

async function cargarSecuencial() {
    const inicio = Date.now();

    const usuario = await cargarUsuario();
    const config = await cargarConfiguracion();
    const menu = await cargarMenu();

    const total = Date.now() - inicio;
    console.log('--- Secuencial ---');
    console.log(usuario, '\n', config, '\n', menu);
    console.log(`Tiempo total: ${total} ms`);
    return total;
}

async function comparar() {
    const tParalelo = await cargarParalelo();
    const tSecuencial = await cargarSecuencial();
    console.log(`Diferencia: ${tSecuencial - tParalelo} ms`);
}

comparar();