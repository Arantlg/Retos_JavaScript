const nota = 5.0;

if (nota < 3.0) {
    console.log("Deficiente")

} else if(nota >= 3.0 && nota <= 3.9){
    console.log("Aceptable")

}else if(nota >= 4.0 && nota <= 4.5){
    console.log("Sobresaliente")
    
}else if(nota >= 4.6 && nota <= 5.0){
    console.log("Excelente")

}else{
    console.log("Nota no valida")
}