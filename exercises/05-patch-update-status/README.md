# `05` PATCH Update Status

Send a `PATCH` request to `/items/1` with this body:

```json
{
  "done": true
}
```

Inspect the response and identify the value that proves the resource status changed correctly.

Expected result: `true`
