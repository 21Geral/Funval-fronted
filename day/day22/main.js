/* ---------SINCRONO --------- */

/* console.log("Luis");
console.log("Mario");
console.log("Geraldine");
console.log("Kevin"); */

/* ---------SINCRONO --------- */
/* console.log("David");
setTimeout(() => {
  console.log("Nefi");
}, 3000);

console.log("Jesus");

setTimeout(() => {
  console.log("Edmund");
}, 5000);

console.log("Kevin"); */

/* ---------SINCRONO --------- */
/* console.log("¿Como aprender a programar en Fronted desde cero?");
console.log("Estudiar y practicar HTML");
console.log("Estudiar y practicar CSS");
console.log("Usar Tailwind");
console.log("Aprender Javascript");
console.log("Aprender REACT"); */

/* ---------ASINCRONO --------- */

/* console.log("¿Como hacer pan un con chicharon?");
console.log("Poner hervir el chancho");
console.log("Pelar camote y freir");
console.log("Comprar pan");
setTimeout(() => {
  console.log("Ya esta el chancho hervido!, sacalo");
}, 500);
console.log("Hacer la salsa de cebolla");
setTimeout(() => {
  console.log("Ya esta listo el camote frito, ahora freir el chancho");
}, 300);
console.log("Armar el pan con chicharon"); */

/* ---- CREAR PROMESA ----*/

function someday() {
  return new Promise((resolve, reject) => {
    let kept = true;
    setTimeout(() => {
      if (kept) {
        resolve("I did it");
      } else {
        reject("I lied");
      }
    }, 5000);
  });
}

/* CONSUMIR PROMESA */

/* someday()
  .then((done) => {
    console.log(done);
  })
  .catch((error) => {
    console.log(error);
  });
 */
let listaEstudiantes = [
  { nombre: "Juan", Pais: "Argentina", edad: 20 },
  { nombre: "Harold", Pais: "PERU", edad: 13 },
  { nombre: "Charlie", Pais: "Chile", edad: 14 },
  { nombre: "CHENTE", Pais: "Mexico", edad: 31 },
  { nombre: "FAUSTO", Pais: "BOLIVIA", edad: 17 },
  { nombre: "MARIA", Pais: "PERU", edad: 18 },
  { nombre: "DIEGO", Pais: "Peru", edad: 23 },
  { nombre: "Martin" },
];
let superPromesa = new Promise((resolve, reject) => {
  let siLlego = true;
  setTimeout(() => {
    if (siLlego) {
      resolve(listaEstudiantes);
    } else {
      reject("error 404 se cayo la base de datos :v");
    }
  }, 3000);
});

/* filtrar solo a los estudiantes mayores de edad y q ademas sean de Peru */

superPromesa
  .then((done) => {
    let resultado = done.filter((est) => est.edad >= 18 && est.Pais.toLowerCase() === "peru");
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
