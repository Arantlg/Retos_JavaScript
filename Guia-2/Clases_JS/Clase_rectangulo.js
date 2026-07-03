class Rectangulo{
    constructor(ancho,alto){
        this.alto=alto;
        this.ancho=ancho;
    }

    area(){
        return this.ancho*this.alto;
    }

    perimetro(){
        return (2*this.alto)+(2*this.ancho);
    }
    static rectanguloCuadrado(lado){
        return new Rectangulo(lado,lado);
    }
}

console.log('--- Rectangulo 1 ---');

const Rectangulo1 = new Rectangulo(12,24);
console.log('Ancho: 12');
console.log('Alto: 24');
console.log('Aréa: ', Rectangulo1.area());
console.log('Perimetro: ', Rectangulo1.perimetro());


console.log('--- Rectangulo 2 ---');

const Rectangulo2 = new Rectangulo(4,9);
console.log('Ancho: 12');
console.log('Alto: 24');
console.log('Aréa: ', Rectangulo2.area());
console.log('Perimetro: ', Rectangulo2.perimetro());


console.log('--- Rectangulo 3 ---');

const Rectangulo3 = new Rectangulo(32,10);
console.log('Ancho: 12');
console.log('Alto: 24');
console.log('Aréa: ', Rectangulo3.area());
console.log('Perimetro: ', Rectangulo3.perimetro());

console.log('--- Cuadrados ---');

const Cuadrado1 = Rectangulo.rectanguloCuadrado(12);
console.log('Cuadrado 1: ',Cuadrado1);

const Cuadrado2 = Rectangulo.rectanguloCuadrado(3);
console.log('Cuadrado 2: ',Cuadrado2);

const Cuadrado3 = Rectangulo.rectanguloCuadrado(56);
console.log('Cuadrado 3: ',Cuadrado3);