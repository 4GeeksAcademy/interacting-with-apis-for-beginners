# `02` POST Create Item With Fields

Send a `POST` request to `/items` with this body:

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

Inspect the response after creating the resource and locate the value that confirms the profile data was stored correctly.

Expected result: `"Sara Vega"`
