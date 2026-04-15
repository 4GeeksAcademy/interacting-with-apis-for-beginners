# `00` Bienvenida

Bienvenido a este LearnPack sobre interacciones RESTful con APIs mediante peticiones HTTP.

En los siguientes ejercicios vas a practicar como:

- crear recursos con `POST`,
- reemplazarlos con `PUT`,
- actualizarlos parcialmente con `PATCH`,
- eliminarlos con `DELETE`,
- y verificar el estado del servidor con peticiones `GET` posteriores cuando haga falta.

## Como trabajar este tutorial

La mayoria de los ejercicios solo te daran:

- el endpoint que debes llamar,
- el cuerpo de la peticion cuando aplique,
- y el resultado o status final esperado.

Tu trabajo sera inspeccionar la respuesta de la API y descubrir que valor debe producir tu funcion.

## Flujo recomendado

1. Abre el enunciado del ejercicio.
2. Usa una herramienta como Postman, Thunder Client o las dev tools del navegador para inspeccionar la respuesta del endpoint.
3. Completa la funcion `solve(baseUrl)` que ya existe en `app.js`.
4. Ejecuta el test y usa el feedback para iterar.

## Nota importante sobre `baseUrl`

No hardcodees `http://localhost:3001`.

Cada test le pasa un argumento `baseUrl` a tu funcion, y tus peticiones deben usar ese valor:

```js
fetch(`${baseUrl}/items`)
```

Eso hace que tu solucion funcione tanto en local como dentro de LearnPack/Codespaces.
