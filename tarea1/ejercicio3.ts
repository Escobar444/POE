/*Calculadora de Entradas Universitarias
Enunciado: Crea una función flecha que calcule el precio de la entrada a un evento universitario. La función debe recibir obligatoriamente el precio base y el tipo de boleto ("GENERAL" o "VIP"). Además, debe recibir un código de descuento de estudiante que es opcional.

Si el boleto es "VIP" se le suman $20 al costo.
Si el usuario pasa el código opcional "ESTUDIANTE", se le aplica un 50% de descuento al total. */

const calcularPrecioEntrada = (precioBase: number, tipoBoleto: "GENERAL" | "VIP", codigoDescuento?: string) => { 
  let precioTotal = precioBase;
  if (tipoBoleto === "VIP") {
    precioTotal += 20;
  }
  if (codigoDescuento === "ESTUDIANTE") {
    precioTotal *= 0.5;
  }
  return precioTotal;
};

// Ejemplos de uso
const precio1 = calcularPrecioEntrada(50, "GENERAL");
console.log(`Precio de entrada (GENERAL): $${precio1.toFixed(2)}`);
const precio2 = calcularPrecioEntrada(50, "VIP");
console.log(`Precio de entrada (VIP): $${precio2.toFixed(2)}`);
const precio3 = calcularPrecioEntrada(50, "GENERAL", "ESTUDIANTE");
console.log(`Precio de entrada (GENERAL con descuento): $${precio3.toFixed(2)}`);
const precio4 = calcularPrecioEntrada(50, "VIP", "ESTUDIANTE");
console.log(`Precio de entrada (VIP con descuento): $${precio4.toFixed(2)}`);

