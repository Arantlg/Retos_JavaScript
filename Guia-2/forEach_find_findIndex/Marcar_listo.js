const mensajes = [
    {
        id: 1,
        texto: 'Recuerda entregar el informe antes del viernes',
        leido: false
    },
    {
        id: 2,
        texto: 'La reunión de mañana fue cancelada',
        leido: true
    },
    {
        id: 3,
        texto: 'Tu solicitud ha sido aprobada',
        leido: false
    },
    {
        id: 4,
        texto: 'Nuevo comentario en tu publicación',
        leido: true
    },
    {
        id: 5,
        texto: 'Actualización disponible para tu aplicación',
        leido: false
    }
];

console.log(`---MENSAJES---`);
mensajes.forEach((mensaje,i) => {
    console.log(`${i+1}- ${mensaje.texto} (${mensaje.leido})`)
});

const m =mensajes.findLastIndex(m=>m.id===3);
if(m==2){
    mensajes[m].leido=true;
}

console.log(`---MENSAJES ACTUALIZADOS---`);
mensajes.forEach((mensaje,i) => {
    console.log(`${i+1}- ${mensaje.texto} (${mensaje.leido})`)
});