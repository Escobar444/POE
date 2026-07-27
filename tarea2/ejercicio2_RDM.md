# Ejercicio 2 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio usa `.filter()` para crear un nuevo arreglo con solo los productos cuyo precio sea mayor a 50.

## Partes del código

### 1. `const productos`
- Contiene una lista de productos con su nombre y precio.

### 2. `.filter()`
- Recorre cada producto del arreglo.
- Evalúa una condición para cada elemento.
- Si la condición devuelve `true`, el elemento se incluye en el nuevo arreglo.
- Si devuelve `false`, se descarta.

### 3. Condición `producto.precio > 50`
- Solo los productos con precio mayor que 50 pasan al nuevo arreglo.
- En este caso, `Laptop` y `Monitor` cumplen la condición.

### 4. `console.log(productosCaros)`
- Muestra en pantalla la lista filtrada.

## ¿Por qué funciona?
- `.filter()` siempre devuelve un arreglo nuevo.
- No modifica el arreglo original.
- La condición se aplica a cada elemento de forma independiente.

## Resultado esperado
Se obtiene un arreglo con los productos caros:

```ts
[
  { nombre: "Laptop", precio: 800 },
  { nombre: "Monitor", precio: 200 }
]
```
