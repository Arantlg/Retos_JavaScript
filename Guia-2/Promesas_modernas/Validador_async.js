function validarLogin(usuario, contrasenia) {
    return new Promise((resolve, reject) => {
        if (usuario === 'admin' && contrasenia === '1234') {
            resolve('OK');
        } else {
            reject(new Error('Credenciales inválidas'));
        }
    });
}

validarLogin('admin', '1234')
    .then((resultado) => console.log('', resultado))
    .catch((error) => console.log('', error.message));

validarLogin('admin', 'wrong')
    .then((resultado) => console.log('', resultado))
    .catch((error) => console.log('', error.message));

validarLogin('user', '1234')
    .then((resultado) => console.log('', resultado))
    .catch((error) => console.log('', error.message));