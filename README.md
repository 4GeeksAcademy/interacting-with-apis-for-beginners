# API and Complex JSON Navigation

<!-- hide -->

By [@4GeeksAcademy](https://github.com/4GeeksAcademy) and contributors at [4Geeks Academy](https://4geeksacademy.com/)

_These instructions are [available in Spanish](./README.es.md)._

**Before you start**: Review the basic workflow for coding projects and LearnPack exercises.

<!-- endhide -->

This LearnPack teaches how to consume a local API and extract values from nested JSON using JavaScript.

## What students will practice

- Reading flat values from JSON responses.
- Accessing nested objects with dot notation.
- Accessing keys with spaces or dashes using bracket notation.
- Reading arrays and arrays of objects.
- Mixing object and array access in the same path.
- Making `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` requests.

## Project structure

- `api/`: local API used by the exercises.
- `exercises/`: 12 incremental exercises.
- `tests/shared/`: helpers used by each exercise test.

## Running the local API

```bash
npm run api
```

The API starts on `http://127.0.0.1:3000`.

You can test it with Postman using:

- `GET /overview`
- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `PATCH /items/:id`
- `DELETE /items/:id`

## Student workflow

1. Open an exercise folder.
2. Complete `app.js`.
3. Use the exercise prompt to decide which endpoint to call.
4. Return the expected value from `solve(baseUrl)`.
5. Run the LearnPack test for that exercise.

## Notes

- The API is local and deterministic.
- No authentication is required.
- Data resets every time the API server restarts.
