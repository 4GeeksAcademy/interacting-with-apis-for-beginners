# `07` POST Then GET by ID

Dentro de `solve(baseUrl)`, haz esta secuencia:

1. Envia una peticion `POST` a `/items` con este body:

```json
{
  "title": "Verify after create"
}
```

2. Lee el id creado desde la respuesta.
3. Haz una peticion `GET /items/:id` usando ese id.

Inspecciona la respuesta del GET posterior e identifica el valor que coincide con el resultado esperado.

Resultado esperado: `"Verify after create"`
