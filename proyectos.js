document.addEventListener("DOMContentLoaded", () => {
  let proyectos = [
    {
      name: "Fundación Perros",
      description: "Un sitio para adoptar mascotas",
      img: "./img/proy1.png",
      href: "./day/day7/tarde/index.html",
    },
    {
      name: "Tienda de maquillaje",
      description: "Un sitio para comprar maquillaje",
      img: "./img/proy2.png",
      href: "./day/day10/index.html",
    },
  ];

  let containerP = document.querySelector("#proyectos");
  if (!containerP) return;

  for (let i = 0; i < proyectos.length; i++) {
    containerP.innerHTML += `
      <a
        href="${proyectos[i].href}"
        target="_blank"
        class="bg-black/50 dark:bg-white/50 flex flex-col gap-2 items-center justify-center p-4 rounded-xl sm:p-7 w-[520px] h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:shadow-cyan-500/30 shadow-[#C68346]"
      >
        <img src=${proyectos[i].img} class="w-[420px]" />
        <div class="dark:text-white">
          <h1 class="font-bold text-2xl">${proyectos[i].name}</h1>
          <p>${proyectos[i].description}</p>
        </div>
      </a>
    `;
  }

  const toggle = document.querySelector("#toggle");
  const todo = document.querySelector("#todo");
  if (toggle && todo) {
    toggle.addEventListener("click", function () {
      todo.classList.toggle("dark");
    });
  }
});
