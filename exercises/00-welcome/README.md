# `00` Welcome

Welcome to this LearnPack about RESTful API interactions through HTTP requests.

In the next exercises you will practice how to:

- create resources with `POST`,
- replace resources with `PUT`,
- update resources partially with `PATCH`,
- remove resources with `DELETE`,
- and verify server state with follow-up `GET` requests when needed.

## How to work through this tutorial

Most exercises will only give you:

- the endpoint you need to call,
- the request body when applicable,
- and the expected final result or status.

Your job is to inspect the API response and figure out which value your function should produce.

## Recommended workflow

1. Open the exercise statement.
2. Use a tool like Postman, Thunder Client, or your browser dev tools to inspect the endpoint response.
3. Complete the existing `solve(baseUrl)` function in `app.js`.
4. Run the test and use the feedback to iterate.

## Important note about `baseUrl`

Do not hardcode `http://localhost:3001`.

Each test passes a `baseUrl` argument to your function, and your requests should use that value:

```js
fetch(`${baseUrl}/items`)
```

That makes your solution work both locally and inside LearnPack/Codespaces.
