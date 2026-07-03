const configuracion = {
  usuario: "Kitty",
  tema: "oscuro",
  idioma: "español",
  notificaciones: true,
  volumen: 80

};

const variable = {...configuracion,brillo:30};
const editar = {...configuracion,notificaciones:false};
const { tema, ...eliminar } = configuracion;

console.log("---- Original ----")
for (const [clave, valor] of Object.entries(configuracion)) { 
    if (typeof valor !== 'function' && typeof valor !== 'object') { 
        console.log(`${clave} → ${valor}`); 
    }
}

console.log("---- Variable más ----")
for (const [clave, valor] of Object.entries(variable)) { 
    if (typeof valor !== 'function' && typeof valor !== 'object') { 
        console.log(`${clave} → ${valor}`); 
    }
}

console.log("---- Variable Eliminada ----")
for (const [clave, valor] of Object.entries(editar)) { 
    if (typeof valor !== 'function' && typeof valor !== 'object') { 
        console.log(`${clave} → ${valor}`); 
    }
}

console.log("---- Variable menos ----")
for (const [clave, valor] of Object.entries(eliminar)) { 
    if (typeof valor !== 'function' && typeof valor !== 'object') { 
        console.log(`${clave} → ${valor}`); 
    }
}