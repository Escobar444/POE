const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 }
];

const productosConDescuento = productos.map((producto) => ({
  nombre: producto.nombre.toLowerCase(),
  precio: producto.precio * 0.9
}));

console.log(productosConDescuento);

export {};
