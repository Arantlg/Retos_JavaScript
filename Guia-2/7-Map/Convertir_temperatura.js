const celsius = [22, -5, 35, 18, 0, 41, -10, 27, 100, 15];

const fahrenheit= celsius.map(c=> (c*9/5)+32);

const temperaturas= celsius.map((c,i)=>({
    celsius:c,
    fahrenheit:fahrenheit[i]
}));

console.log("---Celsius---");
celsius.forEach((c,i)=>{
    console.log((i+1)," - ",c,"ºC");
});

console.log("---Fahrenheit---");
fahrenheit.forEach((f,i)=>{
    console.log((i+1)," - ",f," F");
});

temperaturas.forEach((tem)=>{
    console.log(`${tem.celsius}ºC, = ${tem.fahrenheit}F`);
});


