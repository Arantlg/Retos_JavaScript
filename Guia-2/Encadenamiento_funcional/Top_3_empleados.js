const empleados = [
  { nombre: 'Camila Torres', area: 'TI', salario: 3200000 },
  { nombre: 'Andrés Rojas', area: 'Ventas', salario: 2500000 },
  { nombre: 'Laura Gómez', area: 'TI', salario: 4100000 },
  { nombre: 'Diego Ramírez', area: 'Marketing', salario: 2800000 },
  { nombre: 'Valentina Cruz', area: 'TI', salario: 3800000 },
  { nombre: 'Santiago Peña', area: 'Recursos Humanos', salario: 2600000 },
  { nombre: 'Mariana López', area: 'TI', salario: 2900000 },
  { nombre: 'Felipe Herrera', area: 'TI', salario: 4500000 }
];

const tiEmpleados=empleados.filter(e=>e.area==='TI');

const topEmpleados= tiEmpleados.sort((a,b)=> b.salario - a.salario)
    .slice(0,3);

 console.log("--- 3 MEJORES EMPEADOS TI ---")
 topEmpleados.forEach(t=>
    console.log(`${t.nombre} - ${t.salario}`)
 );
