function  reiniciarContador(){
    console.log("🧾 Contador reiniciado a 0")
}

function notificarUsuario(){
    console.log("🛎 Notificación enviada")
}

function cerrarSesion(){
    console.log("👋 Sesión cerrada")
}

function ejecutarLimpieza(){
    reiniciarContador();
    notificarUsuario();
    cerrarSesion();
}

ejecutarLimpieza();