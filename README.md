# Interacting With APIs for Beginners

<!-- hide -->
> By [@ehiber](https://github.com/ehibe) and [contributors](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/graphs/contributors) at [4Geeks Academy](https://4geeksacademy.com/)

_These instructions are [available in Spanish](./README.es.md)._

This LearnPack helps students practice HTTP requests and JSON navigation with small, auto-graded JavaScript exercises.

## Before you start

You can open this project in [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners) or [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git).

> Once VS Code opens, LearnPack may start automatically. If it does not, run `learnpack start` from the folder that contains `learn.json`.

## Local installation

1. Install LearnPack globally and make sure you have Node.js 16+ available:

```bash
npm install -g @learnpack/learnpack
```

2. From the project root, start the tutorial:

```bash
learnpack start
```

3. In a second terminal, start the local practice API:

```bash
npm run api
```

> If you are working locally, the API runs at `http://127.0.0.1:3000`.
> If you are working in Codespaces or another cloud environment, do not assume `localhost` from your own computer. Use the forwarded URL provided by the environment and pass that value as `baseUrl` when needed.

<!-- endhide -->

This tutorial teaches how to consume an API and extract values from nested JSON responses using JavaScript.

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

## Suggested workflow

1. Run `learnpack start` from the project root.
2. Run `npm run api` in a separate terminal.
3. Open an exercise folder and complete `app.js`.
4. Read the prompt carefully to decide which endpoint to call.
5. Return the expected value from `solve(baseUrl)`.
6. Use the LearnPack feedback to iterate until the test passes.

## API endpoints

- `GET /overview`
- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `PATCH /items/:id`
- `DELETE /items/:id`

## Notes

- The API is deterministic and resets every time the server restarts.
- No authentication is required.
- Postman or Thunder Client can help inspect responses while solving the exercises.

## Contributors

Contributions, fixes, and wording improvements are welcome. If you spot an issue, feel free to open a pull request or contribute directly.

This project follows the spirit of the [all-contributors](https://allcontributors.org/) specification, and every contribution that improves the learning experience matters.
