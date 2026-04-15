# `10` PATCH Update Item

Envia una peticion `PATCH` a `/items/2` con este body:

```json
{
  "title": "Patched title"
}
```

Retorna:

```js
response.data.changed.title
```

Resultado esperado: `"Patched title"`
