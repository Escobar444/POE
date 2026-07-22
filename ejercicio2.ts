/* El Carrito de Compras
Enunciado: Crea una lista de productos de tecnología. Cada producto tiene un nombre y un precio, pero el descuento es opcional. Recorre la lista con un bucle forEach y calcula el precio final que pagará el usuario usando un operador ternario. */

//Objetivo: Practicar arreglos, forEach, operador ternario y propiedades opcionales.

interface Producto {
  nombre: string;
  precio: number;
  descuento?: number;
}

const productos: Producto[] = [
  { nombre: "Laptop", precio: 1000, descuento: 10 },
  { nombre: "Smartphone", precio: 800 },
  { nombre: "Tablet", precio: 600, descuento: 5 },
  { nombre: "Auriculares", precio: 150 },
];
//forEach, operador ternario y propiedades opcionales.

productos.forEach((producto) => {
  const precioFinal = producto.descuento ? producto.precio - (producto.precio * (producto.descuento / 100)) : producto.precio;
  console.log(`Producto: ${producto.nombre}, Precio Final: $${precioFinal.toFixed(2)}`);
});


