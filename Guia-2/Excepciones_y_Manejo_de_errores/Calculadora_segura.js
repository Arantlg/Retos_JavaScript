class ErrorValidacion extends Error { 
    constructor(campo, mensaje) { 
        super(`${campo}: ${mensaje}`); 
        this.name = 'ErrorValidacion'; 
        this.campo = campo; 
    };
};

function dividir(a,b){
    if (b === 0){
        throw new ErrorValidacion(505, 'No se puede dividir entre cero');
    }else{
        return a/b;
    };
};

function revision(a,b){
   try {
        const result = dividir(a, b);
        console.log(`${a} / ${b} = ${result}`);
        return { exito: true, result };
    } catch (error) {
        if (error instanceof ErrorValidacion) {
            console.log(`${a} / ${b} = Error ${error.message}`);
        } else {
            console.log(`Error ${error.message}`);
        }
        return { exito: false, mensaje: error.message };
    };
};

revision(10, 2);
revision(15, 0);
revision(20, 4);
revision(8, 0);
revision(9, 3);