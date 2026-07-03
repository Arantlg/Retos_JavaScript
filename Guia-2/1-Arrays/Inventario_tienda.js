const inventario=["Harina","Leche","Huevos","Ázucar","Chocolate","Sal"];
console.log(`Hay ${inventario.length} productos`);

console.log(`Último producto :`,inventario[inventario.length - 1]);
console.log(`Primer producto :`,inventario[inventario.length - 6]);

for(const producto of inventario){
    console.log("- ",producto);
}

for (let i = 0; i < inventario.length; i++) {
    console.log(i,"-", inventario[i])
}