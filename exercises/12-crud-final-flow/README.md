# `12` CRUD Final Flow

Inside `solve(baseUrl)`, do this sequence:

1. `GET /items`
2. `POST /items` with title `"Capstone item"`
3. `PATCH /items/:id` for the created item with `done: true`
4. `DELETE /items/:id` for the same item

After the full flow, your function should end up producing this exact object:

```js
{
  startCount: 2,
  createdId: 3,
  patchedDone: true,
  deletedId: 3
}
```
