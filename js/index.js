// Definicion de una variable con let
let nombre = "Belen";

//Modificacion de una variable que ya existe
nombre = "Ana";

const PI = 3.14;
let numero = 12;
let numeroString = "20";
let booleano = true;

//console.log() equivalente a funcion print() para mostrar datos en consola
console.log("Resultado de numero + numeroString:", numero + numeroString);

console.log(
  "Resultado de numero + parseInt(numeroString):",
  numero + parseInt(numeroString)
);
console.log("Resultado de numero - numeroString:", numero - numeroString);

/* -------------------------------------------------------------------------- */
/*                      Pedir datos al usuario: prompt()                      */
/* -------------------------------------------------------------------------- */
let entradaInput = prompt("Ingrese su nombre:");

console.log(isNaN(entradaInput));

/* -------------------------------------------------------------------------- */
/*                          Mostrar alertas: alert()                          */
/* -------------------------------------------------------------------------- */

//Simil f-strings para interpolar variables
alert(`Ingresaste: ${entradaInput} - Bienvenido!`);
