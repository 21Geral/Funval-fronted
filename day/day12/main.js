let dia = parseInt(
  prompt(`Presiona un número segun el día que se desees
        1 Lunes
        2 Martes
        3 Miercoles
        4 Jueves
        5 Viernes
        6 Sabado 
        7 domingo`)
);

if (dia <= 5) {
  alert("Tienes clases en Funval");
} else if (dia === 6) {
  alert("Tienes dia libre");
} else if (dia === 7) {
  alert("Debes ir a la capilla");
} else {
  alert("Error, escoge del 1 al 7");
}
