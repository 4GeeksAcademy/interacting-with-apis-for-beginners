# `02` POST Create Item With Fields

Envia una peticion `POST` a `/items` con este body:

```json
{
  "title": "Created with profile",
  "done": true,
  "profile": {
    "name": "Sara",
    "full name": "Sara Vega"
  },
  "contact": {
    "email": "sara@example.com"
  },
  "stats": {
    "scores": [11, 22, 33]
  },
  "tags": ["created", "profile"]
}
```

Inspecciona la respuesta despues de crear el recurso y ubica el valor que confirma que la data del perfil fue guardada correctamente.

Resultado esperado: `"Sara Vega"`
