let habilidades = [
  {
    name: "HTML",
    level: "Intermedio",
    img: "./img/html.png",
  },
  {
    name: "CSS",
    level: "Intermedio",
    img: "./img/css.png",
  },
  {
    name: "Tailwind",
    level: "Intermedio",
    img: "./img/Tailwind.png",
  },
  {
    name: "JavaScript",
    level: "Basico",
    img: "./img/js.png",
  },
  {
    name: "Figma",
    level: "Intermedio",
    img: "./img/figma.png",
  },
  {
    name: "ENGLISH-B2",
    level: "Advance",
    img: "./img/ingles.png",
  },
];

function funcionHabilidades() {
  let containerH = document.querySelector("#habilidades");
  containerH.innerHTML = "";
  for (let i = 0; i < habilidades.length; i++) {
    containerH.innerHTML += `
    
        <div
          title="${habilidades[i].level}"
          class="bg-black/50 dark:bg-white/50 md:text-2xl flex flex-col items-center justify-center p-4 rounded-xl size-52 md:size-60 lg:size-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-[#C68346] dark:shadow-cyan-500/30"
        >
          <img src="${habilidades[i].img}" class="w-32 lg:w-40 rounded-2xl mb-2" alt="" />
          ${habilidades[i].name}
        </div>
            `;
  }
}
export { funcionHabilidades };
