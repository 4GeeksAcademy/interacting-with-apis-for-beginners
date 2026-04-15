# `09` PUT Replace Item

Envia una peticion `PUT` a `/items/1` con este body:

```json
{
  "title": "Replaced item",
  "done": true,
  "profile": {
    "name": "Mia",
    "full name": "Mia Stone"
  },
  "contact": {
    "email": "mia@example.com"
  },
  "stats": {
    "scores": [3, 6, 9]
  },
  "tags": ["put", "replace"],
  "meta": {
    "api-version": "1.0",
    "request id": "item-1-put"
  }
}
```

Inspecciona la respuesta del reemplazo y encuentra el valor anidado que confirma que el nuevo perfil fue guardado.

Resultado esperado: `"Mia Stone"`
