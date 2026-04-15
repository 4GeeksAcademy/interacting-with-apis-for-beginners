# `09` PUT Replace Item

Send a `PUT` request to `/items/1` with this body:

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

Inspect the replacement response and find the nested value that confirms the new profile data was saved.

Expected result: `"Mia Stone"`
