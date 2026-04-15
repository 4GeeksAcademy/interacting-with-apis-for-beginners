# `07` POST Then GET by ID

Inside `solve(baseUrl)`, do this sequence:

1. Send a `POST` request to `/items` with this body:

```json
{
  "title": "Verify after create"
}
```

2. Read the created id from the response.
3. Request `GET /items/:id` using that id.

Inspect the follow-up GET response and identify the value that matches the expected result.

Expected result: `"Verify after create"`
