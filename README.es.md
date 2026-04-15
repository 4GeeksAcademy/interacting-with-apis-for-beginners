# API y Navegacion de JSON Complejo

<!-- hide -->

Por [@4GeeksAcademy](https://github.com/4GeeksAcademy) y contribuidores de [4Geeks Academy](https://4geeksacademy.com/)

_Estas instrucciones estan [disponibles en ingles](./README.md)._

**Antes de comenzar**: Revisa el flujo basico para proyectos de codigo y ejercicios de LearnPack.

<!-- endhide -->

Este LearnPack ensena a consumir una API local y extraer valores de JSON anidado usando JavaScript.

## Que practicara el estudiante

- Leer valores planos desde respuestas JSON.
- Acceder a objetos anidados con dot notation.
- Acceder a claves con espacios o guiones usando bracket notation.
- Leer arreglos y arreglos de objetos.
- Mezclar acceso por objeto y arreglo en una misma ruta.
- Hacer peticiones `GET`, `POST`, `PUT`, `PATCH` y `DELETE`.

## Estructura del proyecto

- `api/`: API local usada por los ejercicios.
- `exercises/`: 12 ejercicios incrementales.
- `tests/shared/`: helpers usados por los tests.

## Ejecutar la API local

```bash
npm run api
```

La API inicia en `http://127.0.0.1:3000`.

Tambien puedes probarla en Postman usando:

- `GET /overview`
- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `PATCH /items/:id`
- `DELETE /items/:id`

## Flujo para el estudiante

1. Abre una carpeta de ejercicio.
2. Completa `app.js`.
3. Usa el enunciado para decidir a que endpoint llamar.
4. Retorna el valor esperado desde `solve(baseUrl)`.
5. Ejecuta el test del ejercicio en LearnPack.

## Notas

- La API es local y deterministica.
- No requiere autenticacion.
- Los datos se reinician cada vez que la API se reinicia.
