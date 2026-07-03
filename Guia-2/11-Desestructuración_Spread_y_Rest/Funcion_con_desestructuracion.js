function mostrarUsuario({nombre,edad,email,rol='usuario'}){
    console.log(`Bienvenido, confirma la infonmación`);
    console.log("Nombre: ",nombre);
    console.log("Edad: ",edad," años");
    console.log("Email: ",email);
};
const usuario={nombre:'Paula', edad:24,email:'paula@gmail.com'}

mostrarUsuario(usuario)