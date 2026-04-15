# `08` DELETE Then Confirm Missing

Dentro de `solve(baseUrl)`, haz esta secuencia:

1. Envia `DELETE /items/2`
2. Luego haz `GET /items/2`

Inspecciona la respuesta de la segunda peticion e identifica el valor que confirma que el recurso ya no esta disponible.

Resultado esperado: `"Item 2 was not found"`
