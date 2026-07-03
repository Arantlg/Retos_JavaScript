const mix=[1, null, 'Ana', 0, '', 25, undefined, 'Bruno', NaN, 42];

const cadena = mix.filter(e => typeof e === 'string' && e !== '');
const numeros = mix.filter(e=> typeof e === 'string' && e !== isNaN(e));
const no_validos = mix.filter(e => Boolean(e));

console.log(cadena);
console.log(numeros);
console.log(no_validos)
