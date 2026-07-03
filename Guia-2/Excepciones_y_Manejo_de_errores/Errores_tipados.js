class ErrorRed extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = 'ErrorRed';
    }
}

class ErrorAutenticacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = 'ErrorAutenticacion';
    }
}

function simularPeticion(tipo) {
    if (tipo === 'red') {
        throw new ErrorRed('No se pudo conectar al servidor');
    } else if (tipo === 'auth') {
        throw new ErrorAutenticacion('No se encontro coincidencias');
    } else {
        return 'La petición se realizo de manera exitosa';
    }
}

function probar(tipo) {
    try {
        const resultado = simularPeticion(tipo);
        console.log(`${resultado}`);
    } catch (error) {
        if (error instanceof ErrorRed) {
            console.log(`Error de red: ${error.message}`);
        } else if (error instanceof ErrorAutenticacion) {
            console.log(`Error de autenticación: ${error.message}`);
        } else {
            console.log(`Error inesperado: ${error.message}`);
        }
    }
}

probar('red');
probar('auth');
probar('ok');