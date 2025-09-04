/* --------------- CONDICIONALES --------------- */

/* 

IF (Condition){
el codigo que se ejecute si la condicios es verdera{
}else{
    el condigo que se ejecutara si la condicion es falsa
}
} */

/* let edad = 10;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Tu eres menor de edad");
} */

/* let edad = parseInt(prompt("Ingresa tu edad"));
if (edad >= 65) {
  alert("Eres de la tercera edad");
} else {
  alert("No eres mayor de edad");
} */

//Pedir un número al usuario y mostrar si es positivo, negativo o cero.
/* let num = parseInt(prompt("Ingresa un número"));
if (num < 0) {
  alert("El número es negativo");
} else if (num === 0) {
  alert("El número es 0");
} else {
  alert("El número es positivo");
}
 */
//Pedir un número y mostrar si es par o impar.
/* let num = parseInt(prompt("Ingresa un número"));

if (num % 2 === 0) {
  alert("El número es positivo");
} else {
  alert("El número es impar");
} */
//Pedir la nota de un alumno y mostrar si aprobó (>=11) o no.
/* let nota = parseInt(prompt("Ingresa la nota"));
if (nota >= 11) {
  alert("Aprobado");
} else {
  alert("Desaprobado");
}
 */
/* let edad = parseInt(prompt("Ingresa tu edad"));
if (edad >= 18) {
  if (edad > 65) {
    alert("Tienes un descuento especial");
  } else {
    alert("Bievenido");
  }
} else {
  alert("Eres menor de edad, get out my way :v");
}
 */
//Pedir dos números y mostrar cuál es mayor o si son iguales.
/* let num1 = parseInt(prompt("Ingresa un número"));
let num2 = parseInt(prompt("Ingresa otro número"));
if (num1 === num2) {
  alert("Los números son iguales");
} else if (num1 > num2) {
  alert("El primer número es mayor");
} else alert("El segundo número es mayor");
 */

/* --------------- BLUCLES FOR --------------- */

/* for (let i = 1; i <= 10; i++){
};  */

//Usa un for para imprimir los números del 1 al 10 en consola
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

//Imprimir los números del 10 al 1.
/* for (let i = 10; i >= 1; i--) {
  console.log(i);
} */
//Imprimir los números pares del 1 al 20.
/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }} */
//Calcular la suma de los números del 1 al 100.
/* let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);
 */

//crear el factorial de un número
/* let num = parseInt(prompt("Ingresa un número4"));
factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`El factorial de ${num} es: ${factorial}`);
 */
//Pedir un número al usuario y mostrar su tabla de multiplicar (del 1 al 12) 1 x num = .
/* let num = parseInt(prompt("Ingresa un número"));

for (let i = 1; i <= 12; i++) {
  console.log(`${nnum} X ${i} = ${num * i}`);
} */

//Sumar por separado los números pares e impares del 1 al 50.
/* let simpar = 0;
let spar = 0;
for (let i = 1; i <= 50; i++) {
  i % 2 === 0 ? (spar += i) : (simpar += i);
}

console.log(`La suma de los impares es: ${simpar}`);
console.log(`La suma de los impares es: ${spar}`);
 */
//Mostrar una pirámide como esta con un for:
/*
 *
 **
 ***
 ****
 *****
 */

/* --------------- ARRAYS --------------- */

/* let frutas = ["manzana", "pera", "banana", "frutilla"];

let casero = prompt("¿Qué fruta desea casero?").toLowerCase();

let encontrado = false;

for (let index = 0; index < frutas.length; index++) {
  if (frutas[index] === casero) {
    console.log("Tu jugo está siendo preparado caserito, toma asiento ");
    encontrado = true;
  }
}

if (!encontrado) {
  console.log("Justo se me acabó, pero tengo otras frutas ricas");
} */

//Dado un array de números, calcular la suma total.
/* let numeros = [11, 20, 30, 40];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log(suma);
 */

//Encontrar el número mayor en un array de enteros.
/* let numeros = [11, 20, 30, 40];
let mayor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log(`El número es: ${mayor}`); */

//Encontrar el número menor en un array.
/* let numeros = [20, 21, 12, 36];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
console.log(`El número menor es ${menor}`); */

/* let matriz = [
  [7, 12, 8], 1,2
  [33, 44, 322], 11
  [77, 2, 1],20
];
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}

console.log(`la suma de las diagonales es ${suma}`);
 */

//crear un objeto de tipo persona

let persona = {
  pais: "Perú",
  dni: 9876541,
  estaVivo: true,
  propiedades: ["casa", "auto", "departamento"],
};

let estudiantes = [
  {
    nombre: "Juan",
    edad: 28,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Pedro",
    edad: 20,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Santiago",
    edad: 65,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Ricardo",
    edad: 16,
    notas: [23, 34, 45, 67, 89],
  },
];

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].edad >= 18) {
    console.log(estudiantes[i].nombre);
  }
}
