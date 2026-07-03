const tareas = [
    {id: 1,titulo: 'Realizar informe mensual',prioridad: 'alta',completada: false},
    {id: 2,titulo: 'Revisar correos pendientes',prioridad: 'media',completada: true},
    {id: 3,titulo: 'Actualizar documentación del proyecto', prioridad: 'baja',completada: false},
    {id: 4,titulo: 'Reunión con el equipo de desarrollo',prioridad: 'alta',completada: true},
    {id: 5,titulo: 'Hacer pruebas unitarias',prioridad: 'media',completada: false},
    {id: 6,titulo: 'Organizar carpetas del repositorio',prioridad: 'baja',completada: false}
];

console.log(`---TAREAS---`);
tareas.forEach((tarea,i) => {
    console.log(`${i+1}- ${tarea.titulo}`)
});

const primero = tareas.find(t => t.prioridad ==='alta'&& t.completada=== false);
console.log(`La primera taria con alta prioridad sin completar es ${primero.titulo}`)

