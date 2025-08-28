
/* let n1 = parseInt(prompt("Ingrese primer nùmero"))
let n2 = parseInt(prompt("Ingrese segundo nùmero"))
resultado = 0;

for (let index = 0; index < n2 ; index++) {
    resultado += n1;   
}
alert ("La multiplicaciòn de" + n1 + " X "+ n2 + " es igual a : " + resultado); */


/*function chauespacio(palabra){
let resultado = "";
for (let i = 0; i < palabra.length; i++) {
if (palabra[i] !== " ") {
resultado = resultado + palabra[i];
}    
}return resultado;
}   

function minusculas(palabra) {
    palabra = palabra.toLowerCase();
    return palabra;
}

function invertir (palabra)*/

let edad = parseInt(prompt("Ingrese su edad"));
let tipo = parseInt(prompt(`Elija tipo de funciòn
    1. Normal 
    2. 3D`));
let snacks = parseInt(prompt(`Lleva combo de snack
    1. Si
    2. No`));
let precio = 0;

function precioBase(tipo) {
  if (tipo === 1) return 30;
  if (tipo === 2) return 45;
  alert("Opción inválida en tipo de función");
  return 0;
}

function aplicarDescuento(precio, edad) {
  if (edad < 12) {
    return precio / 2; 
  } else if (edad > 60) {
    return precio * 0.75; 
  }
  return precio; 
}

function agregarSnacks(precio, snacks) {
  if (snacks === 1) {
    return precio + 20;
  }
  return precio;
}

function calcularTotal(edad, tipo, snacks) {
  let base = precioBase(tipo);
  let conDescuento = aplicarDescuento(base, edad);
  let total = agregarSnacks(conDescuento, snacks);
  return total;
}

let total = calcularTotal(edad, tipo, snacks);
console.log("El precio final a pagar es: " + total + " Bs.");
alert("El precio final a pagar es: " + total + " Bs.");