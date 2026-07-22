# Ejercicio 1 - Documentación

## ¿Qué hace este ejercicio?
Este ejercicio define un tipo de dato para guardar información de una persona que asiste a un evento. Luego crea dos asistentes y muestra su información usando condiciones.

## Partes del código

### 1. `interface Asistente`
- Define cómo debe ser la estructura de un asistente.
- Tiene estas propiedades:
  - `nombre`: texto obligatorio.
  - `carrera`: texto obligatorio.
  - `email`: texto opcional.
  - `asiento`: número opcional.

### 2. `const asistencia1` y `const asistencia2`
- Son datos concretos que siguen la estructura `Asistente`.
- `asistencia1` tiene todos los datos.
- `asistencia2` solo tiene nombre y carrera.

### 3. Condicionales `if`
- El programa verifica si existen `email` y `asiento`.
- Si ambos existen, imprime todos los datos.
- Si faltan, solo imprime `nombre` y `carrera`.

## ¿Por qué funciona?
- `email` y `asiento` son opcionales, por eso no siempre están.
- Las condiciones usan `&&` para pedir que ambos datos estén presentes.
- Si no están, se muestra menos información.

## Resultado esperado
- Para `asistencia1` se imprime el nombre, la carrera, el correo y el asiento.
- Para `asistencia2` se imprime solo el nombre y la carrera.
