import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

//El evento "DOMContentLoaded" sirve para que no intentemos acceder a un nodo HTML con el
//  codigo js antes de que el navegador lo cree:
//Por ejemplo: que no lea un getElementById cuando aun no existe ese id.
document.addEventListener("DOMContentLoaded", () => {
  //Accedemos al contenedor donde queremos generar los articles
  const contenedor = document.getElementById("contenedor-tarjetas");

  //Pedimos la info de productos en carrito para mostrar el numero si hay productos
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  productos.forEach((producto) => {
    // creamos los articles y sus contenidos
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const img = document.createElement("img");
    img.src = `./${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const boton = document.createElement("button");
    boton.classList.add("btn");
    boton.textContent = "Agregar al carrito";

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });

    // Armar la estructura
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
});
