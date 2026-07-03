class Estudiante{
    static cantidadCreados=0;

    sirve=true

    constructor(nombre,curso){
        this.nombre=nombre;
        this.curso=curso;
        this.notas=[];
        this.id=++Estudiante.cantidadCreados;
    }

    agregarNota(n){
        if (n<0 || n>5) return false;
        this.notas.push(n);
        return true;
    }

    promedio(){
        const promedio = this.notas.length > 0
        ? this.notas.reduce((acc, n) => acc + n, 0) / this.notas.length
        : 0;
        return `El promedio de ${this.nombre}, es de ${promedio}`;
    }
}

console.log("--- Estudiante 1 ---");
const estu1= new Estudiante('Pepe', '3A');
estu1.agregarNota(3.4);
estu1.agregarNota(2.3);
estu1.agregarNota(3);
estu1.agregarNota(4);

console.log(estu1.promedio());


console.log("--- Estudiante 2 ---");
const estu2= new Estudiante('Andrea', '3B');
estu2.agregarNota(2.1);
estu2.agregarNota(1.6);
estu2.agregarNota(3);
estu2.agregarNota(3.2);

console.log(estu2.promedio());


console.log("--- Estudiante 3 ---");
const estu3= new Estudiante('Lucas', '3C');
estu3.agregarNota(5);
estu3.agregarNota(4);
estu3.agregarNota(4.7);
estu3.agregarNota(4.9);

console.log(estu3.promedio());


console.log("--- Estudiante 4 ---");
const estu4= new Estudiante('Rebeca', '3D');
estu4.agregarNota(4);
estu4.agregarNota(4.6);
estu4.agregarNota(3.2);
estu4.agregarNota(2);

console.log(estu4.promedio());
