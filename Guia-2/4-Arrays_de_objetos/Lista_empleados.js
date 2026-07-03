const empleados =[{
		id:1,
		nombre:'Diego',
		area:'Contabilidad',
		salario:5000000,
		contacto:{email:'Diego@gmail.com',  telefono:321987657}
	},
	{
		id:2 ,
		nombre:'Estefania',
		area:'Gerente',
		salario:12000000,                             
		contacto:{email:'Estefania@gmail.com',  telefono:301928374}
	},
	{
		id:3,
		nombre:'Hernan',
		area:'Seguridad',
		salario:7000000,                            
		contacto:{email:'Hernan@gmail.com',  telefono:368741267}
	},
	{
		id:4,
		nombre:'Maria Carmen',
		area:'Backend',
		salario:3500000,                             
		contacto:{email:'Maricarmen@gmail.com',  telefono:398514548}
	},
	{
		id:5,
		nombre:'Jhosep',
		area:'Frontend',
		salario:3500000,
		contacto:{email:'Jhosep@gmail.com',  telefono:394156421}
	}];

for(const empleado of empleados){
	console.log(`Empleado: ${empleado.nombre}`);
	console.log(`Área: ${empleado.area}`);
	console.log(`Correo: ${empleado.contacto.email}`);
}