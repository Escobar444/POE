# Ejercicio 3 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio demuestra la desestructuración de objetos en JavaScript/TypeScript. Permite extraer propiedades de un objeto directamente en variables separadas.

## Partes del código

### 1. `const evento`
- Es un objeto que representa un evento.
- Tiene tres propiedades:
  - `tipo`: tipo de evento.
  - `coordenadas`: un objeto anidado con `x` y `y`.
  - `usuario`: nombre del usuario.

### 2. Desestructuración
La línea:

```ts
const { tipo, coordenadas: { x, y }, usuario } = evento;
```

hace lo siguiente:
- Crea una variable llamada `tipo` con el valor de `evento.tipo`.
- Crea `x` y `y` a partir de `evento.coordenadas.x` y `evento.coordenadas.y`.
- Crea `usuario` con el valor de `evento.usuario`.

### 3. `console.log(tipo, x, y, usuario)`
- Muestra las variables extraídas en pantalla.

## ¿Por qué funciona?
- La desestructuración permite acceder a propiedades de un objeto de forma más limpia y corta.
- También sirve para extraer valores de objetos anidados sin escribir mucho código.

## Resultado esperado
Se imprimen estas variables:

```ts
CLICK 100 200 Ana
```
