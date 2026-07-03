const IVA = 0.19;

export function calcularConIVA(precio) {
    return precio + (precio * IVA);
}