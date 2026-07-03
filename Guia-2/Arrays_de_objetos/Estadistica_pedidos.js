const pedidos = [{
	cliente:'Manolo',
	monto:3,
	Items:['café','leche','azúcar']
},{
	cliente:'Claudia',
	monto:5,
	Items:['jabón en polvo','legía','limpiasuelos','suavizante','esponja']
},{
	cliente:'Federico',
	monto:1,
	Items:['Cocacola']
},{
	cliente:'María',
	monto:5,
	Items:['pan de molde','mantequilla','jamón','queso','mortadela']
},{
	cliente:'Elena',
	monto:6,
	Items:['cereal','jugo de naranja','galletas','yogur','atún en lata','papel higiénico']
},{
	cliente:'Pedro',
	monto:2,
	Items:['detergente','mayonesa']
}];

let suma=0;
let pedido_mayor=pedidos[0].monto;
let items_vendidos=0;

for(const pedido of pedidos){
	suma+=pedido.monto;
	
	if (pedido_mayor<pedido.monto){
		pedido_mayor=pedido.monto;
	};

    items_vendidos += pedido.Items.length;;
}

const promedio=suma/6;

console.log(`La suma del monto es de ${suma}`);
console.log(`El pedido más grande es : ${pedido_mayor} productos`);
console.log(`El promedio de los pedidos es de ${promedio}`);
console.log(`Se vendieron ${items_vendidos} items`);