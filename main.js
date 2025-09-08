import { funcionHabilidades } from "./habilidades.js";
funcionHabilidades();

import { funcionPracticas } from "./practicas.js";
funcionPracticas();

let menu = document.querySelector("#menu");
let navlist = document.querySelector(".navegador");

menu.addEventListener("click", () => {
  navlist.classList.toggle("hidden");
  navlist.classList.toggle("flex");
});

function darkmodeInit() {
  const toggle = document.querySelector("#toggle");
  const todo = document.querySelector("#todo");
  if (toggle && todo) {
    toggle.addEventListener("click", function () {
      todo.classList.toggle("dark");
    });
  }
}
darkmodeInit();

export { darkmodeInit };

ScrollReveal().reveal(".reveal", {
  duration: 2000,
  origin: "left",
  distance: "100px",
  delay: 200,
  reset: true,
});
