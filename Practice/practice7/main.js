const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

const contenedor = document.getElementById("secciones");

function crearSeccion(titulo, productosArray) {
  const section = document.createElement("section");
  section.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">${titulo}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${productosArray
            .map(
              (p) => `
            <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 class="text-lg font-bold">${p.nombre}</h3>
              <p class="text-gray-600"> Precio: $${p.precio}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `;
  contenedor.appendChild(section);
}

// Todos los productos
crearSeccion("1 Todos los Productos", productos);

const nombres = productos.map((p) => p.nombre);
const productoBuscado = "Mouse";
const estaDisponible = nombres.includes(productoBuscado);
const seccion2 = document.createElement("section");
seccion2.innerHTML = `
      <h2 class="text-2xl font-semibold mb-4">2 Productos Disponibles (map + includes)</h2>
      <p class="mb-2"> Buscando: <strong>${productoBuscado}</strong></p>
      <p class="mb-4">${estaDisponible ? " Disponible" : " No disponible"}</p>
      <ul class="list-disc list-inside">
        ${nombres.map((nombre) => `<li>${nombre}</li>`).join("")}
      </ul>
    `;
contenedor.appendChild(seccion2);

const conDescuento = productos.map((p) => ({
  nombre: p.nombre,
  precio: (p.precio * 0.9).toFixed(2),
}));
crearSeccion("3 Con 10% de Descuento", conDescuento);

const baratos = productos.filter((p) => p.precio < 100);
crearSeccion("4 Productos con Precio < $100", baratos);

const primeros2 = productos.slice(0, 2);
crearSeccion("5 Primeros 2 Productos", primeros2);

const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
crearSeccion("6 Ordenados por Precio (Ascendente)", ordenados);

const invertidos = [...productos].reverse();
crearSeccion("7 Productos en Orden Inverso", invertidos);
