# Ejercicio 3 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio define una función para calcular el precio de una entrada a un evento universitario. La función usa el tipo de boleto y un posible descuento de estudiante.

## Partes del código

### 1. `const calcularPrecioEntrada = (...) => { ... }`
- Es una función flecha.
- Recibe 3 datos:
  - `precioBase`: número obligatorio.
  - `tipoBoleto`: solo puede ser "GENERAL" o "VIP".
  - `codigoDescuento`: texto opcional.

### 2. Cálculo del precio
- Empieza con el precio base.
- Si el boleto es `VIP`, suma $20 al precio.
- Si el código de descuento es `ESTUDIANTE`, aplica 50% de descuento al total.
- Devuelve el precio final.

### 3. Ejemplos de uso
- Se calcula el precio para:
  - boleto `GENERAL` sin descuento.
  - boleto `VIP` sin descuento.
  - boleto `GENERAL` con descuento de estudiante.
  - boleto `VIP` con descuento de estudiante.
- Cada resultado se imprime en la consola.

## ¿Por qué funciona?
- `tipoBoleto` controla si el precio sube en $20.
- `codigoDescuento` es opcional, así que solo afecta si es exactamente `ESTUDIANTE`.
- El descuento del 50% se aplica después de sumar el costo VIP, si corresponde.

## Resultado esperado
- `GENERAL` -> precio base.
- `VIP` -> precio base + 20.
- `GENERAL` con `ESTUDIANTE` -> mitad del precio base.
- `VIP` con `ESTUDIANTE` -> mitad del precio total (precio base + 20).
