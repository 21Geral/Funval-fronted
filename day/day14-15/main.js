/* -------------------------DECLARAR Y CREAR ARRAYS-------------- */
/* let estudiantesFunval = [
  "Pedro",
  "Jesus",
  "nefi",
  "Luis",
  28,
  true,
  123345678n,
  "Mario",
];
const notas = [12, 23, 34, 45, 56, 67, 78, 89];
/* ----------------METODOS PRINCIPALES DE ARRAYS------------ */
//console.log(estudiantesFunval.length); //verifica la cantidad de elementos q tiene un array
//estudiantesFunval.push("Santiago"); //agregar elementos al final de la lista
//estudiantesFunval.unshift("David"); //agregar elementos al principio de la lista
//let ultimoElemento = estudiantesFunval.pop(); //eliminar el ultimo elemento de la lista
//let primerELemento = estudiantesFunval.shift(); //eliminar el primer elemento de la lista
/* -----------------ITERAR UN ARRAY IMPORTANTISIMO!!!!!----------- */
/* for (let index = 0; index < estudiantesFunval.length; index++) {
  console.log(estudiantesFunval[index]);
} */
/* verificar si en el Array se encuentran los hermanos Luis y Santiago mostrar el indice donde se encuentran */
 let estudiantesFunval1 = [
  "Pedro",
  "David",
  "Nefi",
  "Santiago",
  "Roberto",
  "Mario",
]; 

let switchSantiago = false;
let switchLuis = false;

for (let i = 0; i < estudiantesFunval1.length; i++) {
if (estudiantesFunval1[i] === "Santiago") {
    console.log("Santiago se encuentra en la lista " + i ); 
    switchSantiago = true; 
}if (estudiantesFunval1[i] === "Luis") {
    console.log("Luis se encuentra en la lista" + i);
    switchLuis = true;
}    
}

if (!switchSantiago){
    console.log("Santiago no se encuentra en la lista");
}
if (!switchLuis) {
    console.log("Luis no se encuentra en la lista");
    
    
}

/* se le dara un array de notas de un estudiante debera sacar el promedio de nuestro estudiante y verificar 
    si esta aprobado o reprobado la nota minima de aprobacion es de 51 */

let notasEstudiante = [65, 44, 90, 10, 51, 0];
let suma = 0;

for (let i = 0; i < notasEstudiante.length; i++) {
    suma += notasEstudiante[i];  
    }
    
let promedio = suma / notasEstudiante.length;

if (promedio >=51){
    console.log("Aprobado, el promedio es: " + promedio);
}else {
    console.log("Reprobado, el promdio es: " + promedio);
}
    

