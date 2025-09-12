async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();

    let container = document.querySelector("#containerCards");
    container.innerHTML = "";

    data.forEach((usuario) => {
      container.innerHTML += `
        <div class="max-w-sm p-6 shadow-2xl bg-white border border-gray-200  rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <h3 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
              ${usuario.name}
            </h3>
            <p class="text-gray-500 dark:text-gray-400"><span class="font-bold">Usuario:</span> ${usuario.username}</p>
            <p class="text-gray-500 dark:text-gray-400"><span class="font-bold">Email:</span> ${usuario.email}</p>
            <p class="text-gray-500 dark:text-gray-400"><span class="font-bold">Empresa:</span> ${usuario.company.name}</p>
        </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();
