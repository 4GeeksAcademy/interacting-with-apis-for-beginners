# `10` PATCH Update Item

Send a `PATCH` request to `/items/2` with this body:

```json
{
  "title": "Patched title"
}
```

Return:

```js
response.data.changed.title
```

Expected result: `"Patched title"`
