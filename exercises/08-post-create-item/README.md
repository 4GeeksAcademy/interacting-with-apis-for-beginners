# `08` POST Create Item

Send a `POST` request to `/items` with this body:

```json
{
  "title": "Practice POST requests"
}
```

Return:

```js
response.data.audit.createdAt
```

Expected result: `"2026-04-13T00:00:00.000Z"`
