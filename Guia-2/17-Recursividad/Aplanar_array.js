function aplanar(lista) {
    return lista.reduce((l, e) => {
        if (Array.isArray(e)) {
            return [...l, ...aplanar(e)];
        } else {
            return [...l, e];
        }
    }, []);
}

console.log(aplanar([1, [2, [3, [4]]]]));
console.log(aplanar([1, [2, 3], [4, [5, 6]]]));
console.log(aplanar([[1, 2], [3, [4, [5, [6]]]]]));