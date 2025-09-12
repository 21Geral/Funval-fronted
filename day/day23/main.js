/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  }); */

/* fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

async function album() {
  let res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let data = await res.json();
  let shortTittle = data.filter((album) => album.title.length < 20);
  console.log(shortTittle);
}
album();
 */

/* let contenedor = document.querySelector("#container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((usuario) => {
      contenedor.innerHTML += `
    
<div class="max-w-sm p-6 shadow-2xl bg-white border border-gray-200 text-center rounded-lg  dark:bg-gray-800 dark:border-gray-700">


    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Company: ${usuario.company.name}</p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">"${usuario.company.catchPhrase}"</p>
</div>

      `;
    });
  });
 */
/* ---JALAR CON AXIOS */

/* let contenedor = document.querySelector("#container");
axios("https://jsonplaceholder.typicode.com/posts");
axios("https://jsonplaceholder.typicode.com/posts")
  .then(({ data }) => {
    contenedor.innerHTML = "";
    data.forEach((post) => {
      contenedor.innerHTML += `
        <div class="max-w-sm p-6 shadow-2xl bg-white border border-gray-200 text-center rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              ${post.title}
            </h5>
          </a>
          <p class="text-gray-500 dark:text-gray-400">${post.body}</p>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.log(error);
  });

async function datoAxios() {
  try {
    let { data } = await axios("https://jsonplaceholder.typicode.com/comments");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
datoAxios();
 */

/* // --------------------- FETCH ---------------------
fetch("./usuarios.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

async function datitosUsuarios() {
  try {
    let res = await fetch("./usuarios.json");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
datitosUsuarios();

// --------------------- AXIOS ---------------------
axios("./usuarios.json")
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

async function axiosJson() {
  let { data } = await axios("./usuarios.json");
  console.log(data);
}
axiosJson();
 */

async function renderUssers() {
  try {
    let res = await fetch("./usuarios.json");
    let data = await res.json();

    let filtro = data.filter((usuario) => usuario.edad > 25);
    let contenedor = document.querySelector("#container");

    const hobbyMap = {
      Fotografía: ["📷", "text-red-500"],
      Viajes: ["✈️", "text-blue-500"],
      Música: ["🎵", "text-purple-500"],
      Yoga: ["🧘", "text-green-500"],
      Pintura: ["🎨", "text-pink-500"],
      Senderismo: ["🥾", "text-yellow-600"],
      Lectura: ["📖", "text-indigo-500"],
      Ajedrez: ["♟️", "text-gray-700"],
      Historia: ["📜", "text-orange-500"],
      Deportes: ["⚽", "text-green-600"],
      Natación: ["🏊", "text-blue-400"],
      Cocina: ["🍳", "text-red-400"],
      Correr: ["🏃", "text-yellow-500"],
      Películas: ["🎬", "text-cyan-500"],
      "Redes Sociales": ["💻", "text-pink-400"],
      Moda: ["👗", "text-fuchsia-500"],
      Guitarra: ["🎸", "text-orange-600"],
      Canto: ["🎤", "text-purple-600"],
      Composición: ["✍️", "text-green-600"],
    };

    contenedor.innerHTML = filtro
      .map(
        (usuario) => `
      <div class="p-6 bg-white border shadow-2xl border-gray-200 rounded-lg  hover:bg-gray-100">
        <h5 class="mb-1 text-2xl font-bold text-gray-900">${usuario.nombre}</h5>
        <p class="text-gray-500">Edad: ${usuario.edad}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          ${usuario.hobbies
            .map((h) => {
              let [icon, color] = hobbyMap[h] || ["⭐", "text-gray-500"];
              return `<span class="flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-lg bg-gray-100 ${color}">
                      ${icon} ${h}
                    </span>`;
            })
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  } catch (err) {
    console.log(err);
  }
}
renderUssers();
