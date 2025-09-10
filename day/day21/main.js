/* -------------declarar funciones-------------- */

function duplicar() {
  console.log(2 * 2);
}
duplicar();
/* -------------FUNCIONES ANONIMAS---------------- */
const fundup = function (numero) {
  console.log(numero * 2);
};
fundup(7);
/* -----------FUNCIONES FLECHA------------ */
const pepito = (numero) => numero * 3;
let resultado = pepito(6);
console.log(resultado);

//EJEMPLO:
/* let boton = document.querySelector("#pepe");
boton.addEventListener("click", () => {
  //todo lo q sucedia dentro de la llamada d ela funcion de orden superior
}); */
//------------------------------------------

function superHero(nombre, callBack) {
  callBack(nombre);
}

/* function historia(nombreHeroe) {
  console.log(`este heroe llamado ${nombreHeroe} nacio en el 
        año 1996 en un pueblito italiano al pie de la montañana`);
}
superHero("marco", historia); */

superHero("Marco", (nombre) => {
  console.log(`este heroe llamado ${nombre} nacio en el 
        año 1996 en un pueblito italiano al pie de la montañana`);
});

/* //EJEMPLO:
let botonsito = document.querySelector("#pepe");

function kevin() {
  console.log("funval");
}
botonsito.addEventListener("click", kevin); */
/* ---------------EJEMPLOS DE METODOS DE ARRAYS DE ORDEN SUPERIOR---------- */
let frutas = ["papaya", "frutilla", "banana", "sandia"];
frutas.forEach((fruta) => {
  console.log(`las frutas q tiene este listado son ${fruta}`);
});
/* -------------------------------------------------------------------------- */
/* 
    crear una funcion de orden superior
    y llamarla 2 veces una ejecutando una funcion ya existente
    y otra creando una funcion de tipo flecha dentro de los parametros de llamada
    de la funcion
*/

function funcionSup(funcion) {
  console.log("Hola mundo");
  funcion();
}

function saludar() {
  console.log("Hola again");
}
funcionSup(saludar);

funcionSup(() => {
  console.log("Funcion anonima");
});

/* ----- MAP ------ */

//  map(function (elemento, posicion, array))

const numeros = [3, 10, 20, 50];
const dobles = numeros.map(function (numero) {
  return numero * 2;
  //const dobles = numeros.map(numero => numero * 2);
});
console.log(numeros);
console.log(dobles);

/* ----- FILTER ------ */

const productos = [
  { id: "213", nombre: "Camiseta", precio: 500 },
  { id: "123", nombre: "Zapatillas", precio: 2000 },
  { id: "321", nombre: "Pantalón", precio: 1500 },
];

const esBarato = (producto) => producto.precio < 1000;

const productosBaratos = productos.filter(esBarato);
console.log(productosBaratos);

/* ----- REDUCE ------ */

//  reduce(function (acumulador, elemento, posicion, array))

const numbers = [3, 10, 20, 50];

let total = numbers.reduce((acumulador, number) => acumulador + number, 0);
console.log(total);

/* -------------------------------------------------------------------------- */
/* 
    crear una funcion de orden superior
    y llamarla 2 veces una ejecutando una funcion ya existente
    y otra creando una funcion de tipo flecha dentro de los parametros de llamada
    de la funcion
*/
/* 
    map
    filter
    reduce
    findIndex
    some
    find
     q parametros recibe, q elementos retorna (si es q retorna), ejemplo aplicable - breve comentario :D
*/
/* let platosTipicosBolivia = [
  {
    nombre: "silpancho",
    precio: 25,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silpancho_cochalo.jpg",
  },
  {
    nombre: "piquemacho",
    precio: 50,
    img: "https://img-global.cpcdn.com/recipes/ced4246778e1bb82/680x781cq80/pique-lo-macho-comida-boliviana-foto-principal.jpg",
  },
  {
    nombre: "falso conejo",
    precio: 15,
    img: "https://www.cocina-boliviana.com/base/stock/Recipe/falso-conejo-con-arroz-o-fideo/falso-conejo-con-arroz-o-fideo_web.jpg",
  },
  {
    nombre: "come callao",
  },
];
let contenedor = document.querySelector("#contenedor-platinis");

platosTipicosBolivia.forEach(
  ({ img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4pmi8hrUBui34in23Y8C983RcWOCaqH-HQ&s", nombre, precio = 40 }) => {
    contenedor.innerHTML += `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${img}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
        </a>
        
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           ${precio}
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`;
  }
); */

// ========== EJERCICIOS DE ARRAYS DE ORDEN SUPERIOR ==========
const edades = [10, 12, 25, 29, 31, 26, 18, -10];
const names = ["Paul", "Karla", "Milagros", "Sadra", "Tomas", "Alejandro"];

// 1. Usando .map()
// Dado un array de números, devuelve un nuevo array con cada número multiplicado por 2.
let arrayNumeros = [10, 20, 30, 40];
let dobleNumberos = arrayNumeros.map((numero) => numero * 2);
console.log(dobleNumberos);

// 2. Usando .filter()
// Dado un array de edades, filtra solo las que sean mayores o iguales a 18.
let mayores = edades.filter((edad) => edad > 18);
console.log(mayores);

// 3. Usando .forEach()
// Dado un array de nombres, imprime cada nombre en consola con el prefijo "Hola, ".
const sayHi = names.forEach((element) => console.log(`Hola ${element}`));
console.log(sayHi);

// 4. Usando .some()
// Dado un array de números, verifica si al menos uno es par.
let par = edades.some((esPar) => esPar % 2 === 0);
console.log(par);

// 5. Usando .find()
// Dado un array de nombres, encuentra el primer nombre que tenga más de 5 letras.
const fiveLetter = names.find((element) => element.length > 5);
console.log(fiveLetter);

// 6. Usando .findIndex()
// Dado un array de números, encuentra el índice del primer número negativo.
const findNumber = edades.findIndex((negative) => negative < 0);
console.log(findNumber);

// 7. Combinado (map + filter)
// Dado un array de números, crea un nuevo array que contenga solo los números pares, pero elevados al cuadrado.

const numberMixed = [12, 13, 45, 28];

const newMixed = numberMixed.map;

// 8. Usando .reduce()
// Dado un array de precios, calcula el total sumando todos los elementos.

// 9. Usando .reduce()
// Dado un array de palabras, conviértelo en una sola cadena separada por guiones "-".

// 10. Usando .map() + .some()
// Dado un array de edades, crea un nuevo array que sume 1 a cada edad
// y luego verifica si alguna persona es mayor a 30.

// 11. Usando .filter() + .forEach()
// Dado un array de objetos con {nombre, edad}, imprime en consola
// solo los nombres de las personas mayores de 21 años.

// 12. Usando .find()
// Dado un array de productos con {id, nombre, precio},
// encuentra el producto con precio mayor a 100.

// 13. Usando .reduce()
// Dado un array de números, encuentra el número mayor sin usar Math.max().

// 14. Combinado (map + filter + reduce)
// Dado un array de calificaciones (0-100),
// filtra las aprobadas (>=60), luego eleva todas al cuadrado,
// y finalmente suma el total.

// 15. Ejercicio completo
// Dado un array de usuarios con {id, nombre, activo: true/false, edad},
// 1) Filtra solo los usuarios activos,
// 2) Obtén solo sus nombres en un nuevo array,
// 3) Verifica si alguno es menor de 18,
// 4) Calcula el promedio de las edades de los usuarios activos.
