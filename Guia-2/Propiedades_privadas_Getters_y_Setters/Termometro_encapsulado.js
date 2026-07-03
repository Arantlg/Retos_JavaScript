class Termometro{
    #temperatura;

     constructor(){}

     get celsius(){
        return this.#temperatura;
     }

     get fahrenheit() {
        return (this.#temperatura * 9/5) + 32;
    } 

     set celsius(tem){
        if (tem >= -273 && tem <= 200){
             this.#temperatura=tem;
        }else{
            console.log('Fuera del limite');
        }
     }
}

const termo = new Termometro(25);

console.log('--- Temperatura 1 ---');
termo.celsius = 30;
console.log('Celsius:', termo.celsius);
console.log('Fahrenheit:', termo.fahrenheit);

console.log('--- Temperatura 2 ---');
termo.celsius = -273;
console.log('Celsius:', termo.celsius);
console.log('Fahrenheit:', termo.fahrenheit);

console.log('--- Temperatura 3 ---');
termo.celsius = 500;
console.log('Celsius:', termo.celsius);