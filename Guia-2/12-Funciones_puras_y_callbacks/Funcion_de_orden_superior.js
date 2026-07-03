function crearValidador(min,max){
    return function (num){ 
        return num>=min && num<=max;
    };
};
 
const esNotaValida  = crearValidador(0,100) ;
const esEdadAdulta = crearValidador(18, 120);

console.log(esNotaValida(45));
console.log(esNotaValida(90));
console.log(esNotaValida(109));
console.log(esNotaValida(-2));

console.log(esEdadAdulta(5));
console.log(esEdadAdulta(40));
console.log(esEdadAdulta(17));
console.log(esEdadAdulta(89));