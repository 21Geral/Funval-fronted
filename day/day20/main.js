import { duplicar, restar } from "./functiones.js";
import { n1, n2, n3 } from "./variables.js";
let numero = 50;

console.log(duplicar(numero));
console.log(restar(numero));
console.log(duplicar(n1));
console.log(restar(n1));
console.log(duplicar(n2));
console.log(restar(n2));
console.log(duplicar(n3));
console.log(restar(n3));

/* -----------------------------LOCAL STORAGE------------- */
//GUARDAR VALORES EN LOCAL STORAGE
//localStorage.setItem("superhero", "capitan america");
//LEER VALORES DE LOCAL STORAGE
//console.log(localStorage.getItem("superhero"));
//Eliminar un item
//localStorage.removeItem("productos");
//limpiar todo el localstorage
//localStorage.clear();
/* if (localStorage.getItem("superhero") === "Spiderman") {
  console.log("aplicar dark mode");
} else {
  console.log("aplicar ligth mode");
} */
/* ------------------COMO GUARDAMOS ESTRUCTURAS DE DATOS MAS COMPLEJAS----------- */
let obj = {
  nombre: "kevi",
  edad: 21,
};
localStorage.setItem("prueba", JSON.stringify(obj));
let objetoTransformado = JSON.parse(localStorage.getItem("prueba"));
console.log(objetoTransformado);
//console.log(typeof localStorage.getItem("prueba"));
/* 
    guardar en local storage un array de 
    fanaticos =[{grupo:"BTS",años:2},{grupo:"Real madrid",años:5},{grupo:"kny",años:15}]
    y deberan traerlo y actualizarlo agregando un fanatico mas {grupo:"dota 2",años:5}
    y devolverlo al local storage
*/
// declarar el objeto
let fanaticos = [
  { grupo: "BTS", años: 2 },
  { grupo: "Real madrid", años: 5 },
  { grupo: "kny", años: 15 },
];
localStorage.setItem("fans", JSON.stringify(fanaticos)); //guardar en local Storage
let convertir = JSON.parse(localStorage.getItem("fans")); //para trabajar con los datos

convertir.push({ grupo: "dota 2", años: 5 }); //para agregar con el push actualizar

localStorage.setItem("fans", JSON.stringify(convertir));
convertir = JSON.parse(localStorage.getItem("fans"));
console.log(convertir);
