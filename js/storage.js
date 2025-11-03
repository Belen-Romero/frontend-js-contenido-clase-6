const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //Convertimos a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //convertimos a js para obtener los datos con parse
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
