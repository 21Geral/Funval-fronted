/* SOY UN COMENTARIO varias lineas*/
//solo una linea

/*crear 7 tipos de variables
let cliente = "Antuame";

let edad = 30;
let esAfiliado = true;
let clienteEmail;
let totalCredito = null;
let cci = Symbol("CCI");
let id = 123456789123456789;

console.log(cliente);
console.log(edad);
console.log(esAfiliado);
console.log(clienteEmail);
console.log(totalCredito);
console.log(cci);
console.log(id);

esAfiliado = false;
console.log(esAfiliado);
clienteEmail = "antuane@banco.com";
console.log(clienteEmail);
totalCredito = 10000;
console.log(totalCredito);

let a = 1;
let b;*/

//-----------Ejercicios con operadores de comparación

//Crea dos variables a = 10 y b = "10".
/* a = 10;
b = 10; */

//Verifica si son iguales con ==.
//comparacion = a == b;

//Verifica si son estrictamente iguales con ===.
//comparacion = a === b;

//Explica la diferencia en los resultados.
// == solo compara el dato === compara eso + el tipo de dato

//Declara una variable edad = 18.
//edad = 18;

//Comprueba si edad es mayor o igual a 18.
//comparacion = edad > 18;

//Comprueba si edad es menor a 18.
//comparacion = edad < 18;

//Declara x = 15 y y = 20.
/* x = 15;
y = 20;
 */
//Verifica si x es mayor que y.

//Verifica si x es menor o igual a y.
//comparacion = x < y;

/*Pregunta al usuario con prompt("Ingresa un número:") y compara:
Si el número ingresado es mayor a 100.
Si el número ingresado es igual a 50.*/

/* let numero = prompt("Ingresa un número");
if (numero > 100) {
  alert("El número es mayor a 100");
} else if (numero == 50) {
  alert("El número es igual a 50");
} else {
  alert("No cumple mi comparación gracias :v34");
} */

//----------- Ejercicios con operadores lógicos
//Declara edad = 25 y tieneLicencia = true.
/* let age = 25;
let tieneLicencia = true;
 */
//Usa && para comprobar si la persona puede conducir.
/* if (age >= 18 && tieneLicencia) {
  console.log("Puedes manejar");
} else {
  console.log("Alto, no puedes conducir");
} */

//Declara dia = "domingo" y clima = "soleado".
/* let dia = "domingo";
let climea = "soleado";
 */
//Usa || para comprobar si la persona puede salir a pasear si es domingo o hace soleado.
/* if (dia || soleado) {
  console.log("Anda a pasear");
} else {
  console.log("Permanece en casa");
} */

//Declara llueve = false.
//let llueve = false;

//Usa ! para comprobar si no está lloviendo.
//llueve = !false;

/*Pregunta al usuario su edad con prompt.
Si la edad está entre 13 y 17, muestra "Eres adolescente".
Si es menor a 13, "Eres niño".
Si es mayor o igual a 18, "Eres adulto".*/
/* let pregunta = prompt("Ingresa tu edad");
if (pregunta < 13) {
  alert("Eres un niño");
} else if (pregunta <= 17) {
  alert("Eres adolescente");
} else {
  alert("Eres adulto");
}
 */
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad:"));
let estaca = prompt("Ingrese su estaca");

let estacaM = estaca.toLowerCase();

let respuesta =
  edad >= 18
    ? estacaNormalizada === "miraflores"
      ? "Hola" + nombre + "sea Bienvenido al sistema"
      : "Hola " + nombre + "se encuentra en la estaca equivocada"
    : "Hola " + nombre + ", no tienes acceso";

console.log(respuesta);
alert(respuesta);
