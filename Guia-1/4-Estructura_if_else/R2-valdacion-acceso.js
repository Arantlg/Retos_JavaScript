const edad=14;
const acompaniante=true;

if (edad<13){
    console.log("no puedes asisitir");
}else if(edad>=13 && edad<=17){
    if (acompaniante==true) {
    console.log("Puedes asistir");
    }else{
        console.log("Debes tener acompañante");
    }
}else if(edad>=18){
    console.log("puedes asisitir");
}else{
    console.log("edad invalida");
}