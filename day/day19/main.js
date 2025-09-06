/* -------------INTRODUCCION A ES6-------------- */
//IMPLEMENTABAMOS VARIABLES Y CONSTANTES
//var : es reasignable y redeclarable
var apellido = "Perez";
var apellido = "Sanchez";
//let :es reasignable, NO ES redeclarable
let nombre = "Kevin";
nombre = "Juan";
//const : NO ni reasignable, ni redeclarable
const edad = 10;
/* ----------------TEMPLATE LITERALS----------------- */
let nombreCompleto = "bienvenido " + nombre + " " + apellido;
let saludo = `bienvenido 
*${nombre} 
*${apellido}`;
console.log(nombreCompleto);
console.log(saludo);
/* 
    crear variables con let const y var y
     agregarlas en un string 
    concatenando y con template literals
*/
/* let estudiantes = [
  "Pedro",
  "Geraldine",
  "Santiago",
  "jesus",
  "Mario",
  "Yonathan",
  "David",
  "Roberto",
];
let listado = document.querySelector("#lista");

for (let index = 0; index < estudiantes.length; index++) {
  listado.innerHTML += `<li class="text-red-800 font-bold">${estudiantes[index]}</li>`;
}
let itemli = document.createElement("li");
itemli.textContent = "Kevin";
itemli.classList.add("text-red-800", "font-bold");
listado.appendChild(itemli); */
const estudiantes2 = [
  { nombre: "Juan Pérez", edad: 20, pais: "México", notas: [80, 90, 85] },
  { nombre: "María López", edad: 22, pais: "Argentina", notas: [70, 75, 72] },
  { nombre: "Carlos Ramírez", edad: 21, pais: "Chile", notas: [88, 92, 95] },
  { nombre: "Ana Torres", edad: 19, pais: "Perú", notas: [65, 70, 68] },
  { nombre: "Luis Gómez", edad: 23, pais: "Colombia", notas: [90, 93, 97] },
  { nombre: "Fernanda Ruiz", edad: 20, pais: "Bolivia", notas: [85, 80, 88] },
  { nombre: "Pedro Silva", edad: 24, pais: "Uruguay", notas: [60, 65, 70] },
  { nombre: "Sofía Castro", edad: 22, pais: "Ecuador", notas: [95, 92, 96] },
  {
    nombre: "Andrés Fernández",
    edad: 21,
    pais: "Venezuela",
    notas: [78, 82, 80],
  },
  { nombre: "Camila Díaz", edad: 20, pais: "Paraguay", notas: [88, 85, 90] },
  { nombre: "Rodrigo Morales", edad: 23, pais: "México", notas: [70, 75, 72] },
  { nombre: "Valentina Rojas", edad: 19, pais: "Chile", notas: [98, 95, 99] },
  {
    nombre: "Martín Herrera",
    edad: 22,
    pais: "Argentina",
    notas: [85, 87, 83],
  },
  { nombre: "Daniela Paredes", edad: 21, pais: "Perú", notas: [90, 92, 89] },
  { nombre: "Jorge Mendoza", edad: 24, pais: "Colombia", notas: [60, 62, 65] },
  { nombre: "Lucía Aguilar", edad: 20, pais: "Bolivia", notas: [80, 85, 82] },
  { nombre: "Diego Vargas", edad: 23, pais: "Uruguay", notas: [75, 70, 72] },
  { nombre: "Isabella León", edad: 19, pais: "Ecuador", notas: [92, 94, 90] },
  {
    nombre: "Mateo Castillo",
    edad: 21,
    pais: "Venezuela",
    notas: [65, 60, 68],
  },
  { nombre: "Gabriela Soto", edad: 22, pais: "Paraguay", notas: [99, 97, 100] },
  { nombre: "Geraldine", edad: 18, pais: "Peru" },
];

let bodyTable = document.querySelector("#cuerpo-tabla");

function promedio(arrayNotas) {
  let resultado = 0;
  for (let index = 0; index < arrayNotas.length; index++) {
    resultado += arrayNotas[index];
  }
  return resultado / arrayNotas.length;
}

for (let index = 0; index < estudiantes2.length; index++) {
  let { nombre, edad = "No definido", pais = "no definido", notas = [0] } = estudiantes2[index];
  bodyTable.innerHTML += `<tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${nombre}
            </th>
            <td class="px-6 py-4">${edad}</td>
            <td class="px-6 py-4">${pais}</td>
            <td class="px-6 py-4">${promedio(notas).toFixed(2)}</td>
            <td class="px-6 py-4 flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
            </td>
          </tr>`;
}

/* -----modal---------- */
let abrir = document.querySelector("#open-modal");
let modal = document.getElementById("modalsito");
let cerrar = document.querySelector("#close-modal");
abrir.addEventListener("click", function () {
  modal.classList.replace("hidden", "flex");
});

cerrar.addEventListener("click", function () {
  modal.classList.replace("flex", "hidden");
});
/* ---------------------DESESTRUCTURAION DE ARRAYS------------------------ */
let frutas = ["papaya", "banana", "frutilla", "chirimoya"];

let [var1, var2, var3, var4 = "fruta no encontrada"] = frutas;

console.log(var4);
/* --------------------DESESTRUCTURACION DE OBJETOS------------------- */
let estudianteFunval = {
  name: "Santiago",
  pais: "Argentina",
  age: 23,
  identidadSecreta: "el santi",
  celular: {
    marca: "Samsung",
  },
  notas: [10, 20, 30],
};

let {
  name: superNombre,
  age,
  pais,
  identidadSecreta = "EL BARTO",
  celular: { marca = "no tengo celu" },
  notas: [, nota2],
} = estudianteFunval;
console.log(marca);
console.log(nota2);
/* ------------------------SPREAD OPERATOR------------------- */
// DUPLICAR o copiar UN OBJETO O UN ARRAY
// FUSIONAR 2 O MAS OBJETOS/ARRAY
// AGREGAR VALORES AUN OBJETO/ARRAY YA EXISTENTE y crear uno nuevo
/* ------------------ARRAYS--------------------------------------- */
let mascotas = ["gato", "Perro", "Loro", "Monos", "Peces", "Renacuajos"];
let mascotasMenosComunes = ["lagartijas", "Guacamayas", "serpientes", "Tarantulas"];

let mascotas2 = [...mascotas];
let totalMascotas = [...mascotas, ...mascotasMenosComunes];
let mascotasDeRicos = [...mascotas, "Gorila", "Jirafas", "Leones", "Elefantes"];

console.log(mascotas2);
console.log(totalMascotas);
console.log(mascotasDeRicos);
/* -------------------------OBJETOS-------------------- */
let superHeroe = {
  nombre: "Peter Parker",
  identidadSuperSecreta: "Spiderman",
  superPoder: "Habilidades de araña",
  habilidadesLaborales: "Resiliencia",
};
let agenteShield = {
  nombre: "Colson",
  arma: "Pistola Paralizadora",
  superPoder: "Ninguno",
  agenteDelGobierno: false,
};

let copiarObj = { ...superHeroe };

let fusion = { ...superHeroe, ...agenteShield };

let superHeroSimbionte = {
  ...superHeroe,
  traje: "Negro",
  aumentoDeFuerza: 10,
  ira: 100,
};
console.log(copiarObj);
console.log(fusion);
console.log(superHeroSimbionte);

function MostrarNombre({ nombre, habilidadesLaborales }) {
  console.log(`el nombres es : ${nombre}`, `las habilidades son :${habilidadesLaborales}`);
}

MostrarNombre(superHeroe);

/* 
💡 EJERCICIO: "Liga de Superhéroes"
1. Desestructura el array para obtener el primer héroe, el segundo héroe, y el resto en otro array.  
2. Crea un nuevo array de héroes que incluya a los originales y agrega uno nuevo con el spread operator (...).  
3. Desestructura un héroe en sus propiedades (nombre, poder, fuerza) y usa template literals para mostrar su descripción en consola.  
4. Agrega un botón que, al hacer clic, muestre en el DOM una lista de héroes con sus niveles de fuerza.
*/
// Array de superhéroes
const heroes = [
  { nombre: "Iron Man", poder: "Armadura tecnológica", fuerza: 85 },
  { nombre: "Thor", poder: "Martillo Mjolnir", fuerza: 95 },
  { nombre: "Hulk", poder: "Fuerza sobrehumana", fuerza: 100 },
  { nombre: "Black Widow", poder: "Espionaje y combate", fuerza: 75 },
];
