//Práctica 3 | Modules

//Primera parte ------------------------------------------------------------------------------

// function greet() {
//     console.log('Hello');
// }
// let logGreeting = (miParametro) => miParametro();

// logGreeting(greet);

//Refactorizado con function expression created on the fly
let logGreeting = (miParametro) => miParametro();

logGreeting(function () {  //function expression created on the fly
    console.log('Hello from a function created on the fly');
});

//interpolación de strings "Clásica"
let logGreeting1 = (miNombre, miColor) => {
    console.log('Hola ' + miNombre + ' buenos días! Tu color favorito es el ' + miColor); //El string resultante es creado a través de una concatenación
}
logGreeting1('Fernando', 'Rojo'); //Se manda a llamar la función

//Segunda parte -----------------------------------------------------------------------------

require('./greet');