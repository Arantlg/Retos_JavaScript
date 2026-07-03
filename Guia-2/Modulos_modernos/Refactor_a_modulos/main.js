import { validarUsuario } from './validador.js';
import { calcularConIVA } from './precios.js';

const usuario = { nombre: 'Ara', edad: 25 };
const resultadoValidacion = validarUsuario(usuario);
console.log(resultadoValidacion);

const precioFinal = calcularConIVA(3500);
console.log('Precio con IVA:', precioFinal);