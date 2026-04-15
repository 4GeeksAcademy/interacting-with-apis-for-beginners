# `12` CRUD Final Flow

Dentro de `solve(baseUrl)`, haz esta secuencia:

1. `GET /items`
2. `POST /items` con el titulo `"Capstone item"`
3. `PATCH /items/:id` para el item creado con `done: true`
4. `DELETE /items/:id` para ese mismo item

Despues de completar todo el flujo, tu funcion debe terminar produciendo este objeto exacto:

```js
{
  startCount: 2,
  createdId: 3,
  patchedDone: true,
  deletedId: 3
}
```
