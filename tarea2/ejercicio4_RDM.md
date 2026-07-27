# Ejercicio 4 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio define un `enum` llamado `EstadoUsuario` para representar los posibles estados de un usuario y luego crea una variable que usa uno de esos estados.

## Partes del código

### 1. `enum EstadoUsuario`
- Un `enum` permite definir un conjunto de valores nombrados.
- En este caso, los valores son:
  - `ACTIVO`
  - `INACTIVO`
  - `SUSPENDIDO`

### 2. `const estadoActual`
- Crea una variable con el tipo `EstadoUsuario`.
- Le asigna el valor `EstadoUsuario.ACTIVO`.

### 3. `console.log(estadoActual)`
- Muestra en pantalla el valor actual del estado.

## ¿Por qué funciona?
- Los enums hacen que el código sea más legible.
- En lugar de usar números o cadenas sueltas, se usan nombres claros.
- Esto ayuda a mantener el código ordenado y fácil de entender.

## Resultado esperado
Se imprime el estado activo:

```ts
0
```

> En TypeScript, si no se especifica un valor, los miembros del enum comienzan en `0`, por lo que `ACTIVO` corresponde a `0`.
