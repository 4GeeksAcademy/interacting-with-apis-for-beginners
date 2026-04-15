# `00` Bienvenida

Bienvenido a este LearnPack sobre interaccion con APIs mediante peticiones HTTP.

En los siguientes ejercicios vas a practicar como:

- inspeccionar respuestas JSON de endpoints reales,
- leer propiedades anidadas y arreglos,
- enviar peticiones `GET`, `POST`, `PUT`, `PATCH` y `DELETE`,
- y decidir que debe producir tu funcion `solve(baseUrl)` segun la data que recibes.

## Como trabajar este tutorial

La mayoria de los ejercicios solo te daran:

- el endpoint que debes llamar,
- a veces un cuerpo de peticion,
- y el resultado final esperado.

Tu trabajo sera inspeccionar la respuesta y descubrir que valor debe producir tu funcion.

## Flujo recomendado

1. Abre el enunciado del ejercicio.
2. Usa una herramienta como Postman, Thunder Client o las dev tools del navegador para inspeccionar la respuesta del endpoint.
3. Completa la funcion `solve(baseUrl)` en `app.js`.
4. Ejecuta el test y usa el feedback para iterar.

## Nota importante sobre `baseUrl`

No hardcodees `http://localhost:3001`.

Cada test le pasa un argumento `baseUrl` a tu funcion, y tus peticiones deben usar ese valor:

```js
fetch(`${baseUrl}/overview`)
```

Eso hace que tu solucion funcione tanto en local como dentro de LearnPack/Codespaces.
