# `12` CRUD Final Flow

Dentro de `solve(baseUrl)`, haz esta secuencia:

1. `GET /items`
2. `POST /items` con el titulo `"Capstone item"`
3. `PATCH /items/:id` para el item creado con `done: true`
4. `DELETE /items/:id` para ese mismo item

Retorna este objeto exacto:

```js
{
  startCount: number,
  createdId: number,
  patchedDone: boolean,
  deletedId: number
}
```
