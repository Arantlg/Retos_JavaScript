const cursos = [
  { titulo: 'JavaScript Básico', categoria: 'Programación', estudiantes: 120, valoracion: 4 },
  { titulo: 'Diseño UX/UI', categoria: 'Diseño', estudiantes: 85, valoracion: 5 },
  { titulo: 'Marketing Digital', categoria: 'Marketing', estudiantes: 200, valoracion: 3 },
  { titulo: 'Python Avanzado', categoria: 'Programación', estudiantes: 95, valoracion: 5 },
  { titulo: 'Fotografía Digital', categoria: 'Fotografía', estudiantes: 60, valoracion: 4 },
  { titulo: 'React desde Cero', categoria: 'Programación', estudiantes: 150, valoracion: 4 },
  { titulo: 'Edición de Video', categoria: 'Diseño', estudiantes: 70, valoracion: 3 },
  { titulo: 'SEO para Principiantes', categoria: 'Marketing', estudiantes: 110, valoracion: 4 },
  { titulo: 'Bases de Datos SQL', categoria: 'Programación', estudiantes: 130, valoracion: 5 },
  { titulo: 'Ilustración Digital', categoria: 'Diseño', estudiantes: 45, valoracion: 2 }
];

const mejorValoracion= cursos.filter(c=> c.valoracion>=4);

const ranker=Object.entries (mejorValoracion.reduce((acc,c)=>{
    acc[c.categoria]=(acc[c.categoria]||0)+c.estudiantes
    return acc;
},{}))
.map(([categoria, total]) => ({ categoria, total }))
.sort((a,b,i) => b.total - a.total);

console.log("--- RANKING ---")
ranker.forEach((r,i)  => {
    console.log((i+1),". ",r.categoria ," - Estudiantes: ", r.total)
});