# `08` POST Create Item

Envia una peticion `POST` a `/items` con este body:

```json
{
  "title": "Practice POST requests"
}
```

Retorna:

```js
response.data.audit.createdAt
```

Resultado esperado: `"2026-04-13T00:00:00.000Z"`
