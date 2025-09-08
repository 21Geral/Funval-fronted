let practicas = [
  {
    name: "Practica Calificada 1",
    href: "./Practice/practice1/Index.html",
    img: "./img/proyecto1.png",
  },
  {
    name: "Practica Calificada 2",
    href: "./Practice/practice2/index.html",
    img: "./img/proyecto2.png",
  },
  {
    name: "Practica Calificada 3",
    href: "./Practice/practice 3/index.html",
    img: "./img/proyecto.3.png",
  },
  {
    name: "Practica Calificada 5",
    href: "./Practice/Practice5/index.html",
    img: "./img/poryecto5.png",
  },
  {
    name: "Practica Calificada 6",
    href: "./Practice/practice6/index.html",
    img: "./img/poryecto6.png",
  },
  {
    name: "Practica Calificada 7",
    href: "./Practice/practice7/index.html",
    img: "./img/poryecto7.png",
  },
];
function funcionPracticas() {
  let containerPr = document.querySelector("#practicas");
  containerPr.innerHTML = "";
  for (let i = 0; i < practicas.length; i++) {
    containerPr.innerHTML += `
    <a
          href="${practicas[i].href}"
          target="_blank"
          class="bg-black/50 dark:bg-white/50 flex flex-col items-center justify-center p-4 rounded-xl sm:p-7 w-[400px] h-[250px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:shadow-cyan-500/30 shadow-[#C68346]"
        >
          <div class="dark:text-white">
            <img src="${practicas[i].img}" class="w-[320px]" />
            <h1 class="font-bold text-2xl">${practicas[i].name}</h1>
          </div>
        </a>
       
            `;
  }
}
export { funcionPracticas };
