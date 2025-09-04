/* --------------MANIPULACION DEL DOM------------- */
/* ----------SELECION DE ELEMENTOS---------------- */
//Selecionar un elemento por su ID
let title = document.getElementById("titulo");
// Selecion elementos por su clase
let items = document.getElementsByClassName("super-titulo");
//selecionar elementois por su etiqueta
let parrafo = document.getElementsByTagName("p");
//Selecionar al primer elemento q encuentre q coincida
let elemento = document.querySelector("p");
//Selecionar a un conjunto de elementos q coincidan con la busqueda
let grupo = document.querySelectorAll(".super-titulo");
/* ------------------MODIFICAR EL CONTENIDO DEL ELEMENTO SELECIONADO---------------- */
let listaEstudiantes = ["kevin", "santiago", "luis"];
let tituloGrande = document.querySelector("#titulo");
tituloGrande.textContent = "Hola buenos dias :D";
let contenedor = document.querySelector(".pepito");
for (let index = 0; index < listaEstudiantes.length; index++) {
  contenedor.innerHTML += `<h2>hola amigo ${listaEstudiantes[index]}</h2>`;
}
/* ------------------PODEMOS MODIFICAR ESTILOS Y CLASES DE UN ELEMENTO SELECIONADO------------ */
contenedor.style.backgroundColor = "red"; //para ccs puro
contenedor.style.fontSize = "10px"; //para ccs puro
contenedor.classList.add("pedro"); //agregar
contenedor.classList.remove("pepito"); //quitar
contenedor.classList.toggle("juan");
contenedor.classList.add("bg-blue-700");
contenedor.classList.add("text-2xl", "font-bold", "text-red-500");

/*    crear una etiqueta h1 p y div en el html
    selecionar la etiqueta h1 y cambiar el texto y el color de texto (pueden usar tailwind o css puro)
    modificar el color de fond de la etiqueta p y el tamaño de texto 
    y con el div agregarle por lo menos 2 hijos 
        uno de esos hijos debera ser IMG
        y el otro sera un p
*/
let subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Hola a todos";
subtitulo.classList.add("bg-pink-500", "text-2xl");
subtitulo.classList.add("text-white");

let texto = document.querySelector(".parrafo");
texto.classList.add("bg-blue-500");
texto.classList.add("text-md");
texto.classList.add("text-white");

let imagen = document.getElementById("img");
imagen.classList.add("h-[50px]");

/* ------------------PODER AGREGAR O MODIFICAR ATRIBUTOS EN JAVASCRIPT---------------- */
let fotito = document.querySelector("#foto");
/* cambiar los atributos */
fotito.setAttribute("src", "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/blue-lock-isagi(1).jpg");
fotito.setAttribute("alt", "imagen del personaje principal de blue lock");
/* leer los atributos q tiene el elemento */
console.log(fotito.getAttribute("src"));
console.log(fotito.getAttribute("alt"));
/* quitar atributos */
fotito.removeAttribute("src");
/* -----CREAR Y ELIMINAR ELEMENTOS HTML ------------------ */
let lista = document.querySelector("ul");
//creacion de un elemento
let nuevo = document.createElement("li");
nuevo.textContent = "Kevin";
console.log(nuevo);
//agregarlo al final
//lista.appendChild(nuevo);
//agregar al principio
//lista.prepend(nuevo);
//insertarlos antes de un elemento X
//lista.insertBefore(nuevo, lista.children[1]);
//eliminar un elemento
lista.removeChild(lista.children[2]);
console.log(lista);

/* 
    crear en HTML 
    un etiqeuta de tipo div con h2
    con javascript deberan crear un h1 con el nombre de un producto
    una eitiqueta img para la imagen del producto
    y una etiqueta de tipo parrafo para la descripcion del producto
    y un boton de comprar 
    dberan eliminar el h2 nativo y colocar en orden las etiquetas queda prohibido utilizar INERHTML
*/
let container = document.getElementsByClassName("container");
let titulo = document.createElement("h1");
titulo.textContent = "Producto";

let img = document.createElement("img");
img.src = img;
