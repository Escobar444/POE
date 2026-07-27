# Ejercicio 1 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio usa `.map()` para recorrer un arreglo de productos y crear un nuevo arreglo con los mismos productos, pero con el precio ya aplicado un descuento del 10%.

## Partes del código

### 1. `const productos`
- Define un arreglo de objetos.
- Cada objeto tiene dos propiedades:
  - `nombre`: el nombre del producto.
  - `precio`: el precio original.

### 2. `.map()`
- `map()` recorre cada elemento del arreglo original.
- Por cada producto, crea un nuevo objeto.
- Esto permite transformar los datos sin modificar el arreglo original.

### 3. Operación de descuento
- El precio nuevo se calcula así:
  - `producto.precio * 0.9`
- El `0.9` representa el 90% del precio original, es decir, un descuento del 10%.

### 4. `toLowerCase()`
- Convierte el nombre a minúsculas.
- Por ejemplo, `"Laptop"` pasa a `"laptop"`.

### 5. `console.log(productosConDescuento)`
- Muestra en pantalla el nuevo arreglo ya transformado.

## ¿Por qué funciona?
- `.map()` devuelve un nuevo arreglo con la misma cantidad de elementos que el original.
- Cada elemento se transforma según la lógica que se define dentro de la función.
- El operador `...producto` copia todas las propiedades del objeto original y luego se sobrescribe `precio` con el nuevo valor.

## Resultado esperado
Se obtiene un arreglo como este:

```ts
[
  { nombre: "laptop", precio: 720 },
  { nombre: "mouse", precio: 22.5 },
  { nombre: "teclado", precio: 54 }
]
```
