/* ------------- ES6------------- */
//IMPLEMENTAMOS VARIABLES Y CONSTANTES

var persona = "Juan";
let edad = 26;
const profesion = "Doctor";

function info() {
  console.log(`Ella es ${persona} tiene ${edad} y es ${profesion}`);
}
info();

let estudiantes = ["Pedro", "Geraldine", "Santiago", "Jesus", "Mario"];

let listado = document.querySelector("#lista");

for (let i = 0; i < estudiantes.length; i++) {
  listado.innerHTML += `<li>${estudiantes[i]}</li>`;
}
/* crear un solo elemento que contenga a todos los li poder agregarlos de forma dinamica */

let itemli = document.createElement("li");
