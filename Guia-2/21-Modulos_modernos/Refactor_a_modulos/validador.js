export function validarUsuario(usuario) {
    if (!usuario.nombre || usuario.nombre.trim() === '') {
        return { valido: false, mensaje: 'El nombre es obligatorio' };
    }
    if (!usuario.edad || usuario.edad < 18) {
        return { valido: false, mensaje: 'El usuario debe ser mayor de edad' };
    }
    return { valido: true, mensaje: 'Usuario válido' };
}