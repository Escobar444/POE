# Ejercicio 2 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio crea una lista de productos con precio y descuento opcional. Recorre la lista y calcula cuánto debe pagar el usuario por cada producto.

## Partes del código

### 1. `interface Producto`
- Define la forma de cada producto.
- Propiedades:
  - `nombre`: texto obligatorio.
  - `precio`: número obligatorio.
  - `descuento`: número opcional.

### 2. `const productos`
- Es un arreglo con varios objetos `Producto`.
- Algunos productos tienen descuento y otros no.

### 3. `productos.forEach(...)`
- Recorre la lista de productos uno por uno.
- Dentro del bucle se calcula el precio final.
- Si el producto tiene `descuento`, aplica la rebaja.
- Si no lo tiene, usa el precio normal.

### 4. Operador ternario `...? ... : ...`
- `producto.descuento ? ... : ...`
- Significa: si hay descuento, calcula el precio con descuento; si no, usa el precio normal.

## ¿Por qué funciona?
- Si `descuento` no existe, el valor es `undefined` y la parte después del `:` se usa.
- Si existe, se calcula `precio - (precio * (descuento / 100))`.
- `toFixed(2)` asegura que el número tenga dos cifras decimales.

## Resultado esperado
- Imprime el nombre y el precio final de cada producto.
- Para productos con descuento muestra el nuevo valor reducido.
- Para productos sin descuento muestra el precio original.
