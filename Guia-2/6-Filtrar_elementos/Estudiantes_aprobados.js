const estudiantes=[{ nombre: 'Laura Martínez', nota: 84, asistencia: '95%' },
{ nombre: 'Santiago Gómez', nota: 76, asistencia: '80%' },
{ nombre: 'Valentina Torres', nota: 94, asistencia: '98%' },
{ nombre: 'Andrés Ramírez', nota: 58, asistencia: '65%' },
{ nombre: 'Camila Herrera', nota: 70, asistencia: '75%' },
{ nombre: 'Felipe Morales', nota: 80, asistencia: '88%' },
{ nombre: 'Isabella Díaz', nota: 46, asistencia: '55%' },
{ nombre: 'Sebastián López', nota: 90, asistencia: '92%' },
{ nombre: 'Daniela Castro', nota: 62, asistencia: '70%' },
{ nombre: 'Mateo Vargas', nota: 36, asistencia: '40%' },];

const aprobados = estudiantes.filter(e => e.nota>=60 &&  parseInt(e.asistencia)>=80);
console.log("Los estudiantes aprobados son ",aprobados.length)
console.log("Estos son: ")
for (const a of aprobados){
    console.log(a.nombre);
}
