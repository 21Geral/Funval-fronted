/*-------------seleccionar el elemento---------*/
/* let botoncito = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
botoncito.addEventListener("click", function () {
  if (botoncito.classList.contains("bg-blue-800")) {
    botoncito.classList.replace("bg-blue-800", "bg-red-800");
  } else {
    botoncito.classList.replace("bg-red-800", "bg-blue-800");
  }
  parrafo.textContent = "funval siempre los mejores";
}); */

/*crear un elemento un boton si gustan  q represente al dia
    al darle click debera pasar a noche 
    fiona debera pasar ds ser una princesa
    a una ogro */
/* let btnDia = document.querySelector("#btnDia");
let imgDia = document.querySelector("#imgDia");
let dia = true;

btnDia.addEventListener("click", function () {
  dia = !dia;
  if (dia) {
    btnDia.textContent = "Noche";
    btnDia.classList.add("bg-blue-300");
    btnDia.classList.remove("bg-amber-300");
    imgDia.src = "https://img.fruugo.com/product/4/56/10589564_0340_0340.jpg";
  } else {
    btnDia.classList.remove("bg-blue-300");
    btnDia.classList.add("bg-amber-300");
    btnDia.textContent = "Día";
    imgDia.src = "https://i.pinimg.com/originals/3b/16/6d/3b166d87ffa3e065d03e0c34e42e1281.jpg";
  }
});

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(e);
  let obj = {};
  let nombreInput = document.querySelector("#nombre").value;
  let apellidosInput = document.querySelector("#Apellidos").value;
  obj.nombres = nombreInput;
  obj.apellidos = apellidosInput;
  console.log(nombreInput, apellidosInput);
  console.log(obj);
});

/* 
    pedir datos a un usuario de la forma q ustedes gusten
    pero debera llegarme en el siguiente formato
    {
        nombre:"string",
        edad:number,
        esMiembroSud:true    
    }
*/

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {};
  let nombre = document.querySelector("#nombre").value;
  let edad = document.querySelector("#edad").value;
  let miembro = document.querySelector(`input[name="miembroSud"]:checked`);
  let esMiembroSud;
  if (miembro) {
    esMiembroSud = miembro.value === "si";
  }

  obj.nombre = nombre;
  obj.edad = parseInt(edad);
  obj.miembro = esMiembroSud;
  console.log(nombre, edad, miembro);
  console.log(obj);
});
