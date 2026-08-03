<!-- hide -->
<div align="center">

# API and Complex JSON Navigation

[![Certified by 4Geeks Academy](https://img.shields.io/badge/4Geeks%20Academy-Certified-2563eb)](https://4geeksacademy.com/)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-Autograded-2563eb)](https://learnpack.co/)
[![Open in Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-fb5a1f?logo=github)](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners)

</div>

![Cover card of the tutorial API and Complex JSON Navigation: a light gray banner with the title set in bold black type, the line by 4Geeks Academy underneath, a green chat bubble with three dots on the right and a purple robot mascot with a smiling green mouth](https://raw.githubusercontent.com/4GeeksAcademy/interacting-with-apis-for-beginners/main/preview.png)

_These instructions are also [available in Spanish](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/blob/HEAD/README.es.md)._
<!-- endhide -->

This tutorial is a LearnPack package with 8 auto-graded JavaScript exercises plus a welcome step. Every exercise runs against a local Node.js REST API seeded with 2 items, so you practice `POST`, `PUT`, `PATCH` and `DELETE`, read the status codes `201`, `200`, `204`, `400` and `404`, and pull values out of nested JSON with awkward keys such as `profile["full name"]`. The grader inspects the HTTP requests your code actually sent.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty:** easy (beginner level, `"difficulty": "EASY"` in `learn.json`).
- **Estimated duration:** 8 hours.
- **Technologies:** JavaScript, JSON, REST API, Fetch API, HTTP, CRUD.
- **Exercises:** 9 steps in total — 1 welcome step and 8 graded exercises, each with its own `test.js`.
- **Grading:** automatic and isolated, powered by Jest through LearnPack.
- **Languages:** every statement is written in English and Spanish.
- **Requirements:** no API keys, no accounts and no internet calls — the practice API ships inside the repository.
<!-- endhide -->

## 🎯 What will you learn?

- How to send a request body with `fetch`, `JSON.stringify` and the `method` option, instead of only doing plain `GET` calls.
- The real difference between `PUT` (replaces the whole resource) and `PATCH` (touches only the fields you send).
- How to read a status code from the response object with `response.status`, and when the body is empty and there is nothing to parse.
- How to walk a nested JSON envelope: `data.item`, `data.results`, `data.changed`, `data.audit` and the top-level `error`.
- How to reach keys that dot notation cannot handle, like `profile["full name"]`, `meta["request id"]` and `meta["api-version"]`.
- How to chain requests so the second one depends on the result of the first, such as creating a resource and then fetching it by its new id.
- Why a REST API answers `201` on create, `204` on delete, `400` on invalid payloads and `404` when the resource is gone.

## 👀 What will you build?

You complete the `async function solve(baseUrl)` inside each `app.js` and **return** the value the statement asks for. These are the 8 graded exercises, after the `00` welcome step:

1. **`01` POST Create Item** — send `POST /items` with `{ "title": "Practice POST requests" }` and return the id of the new resource, which is `3`.
2. **`02` POST Create Item With Fields** — send a richer body with `profile`, `contact`, `stats.scores` and `tags`, then return `"Sara Vega"`, the value stored in `profile["full name"]`.
3. **`03` PUT Replace Item** — replace `/items/1` completely and return `"Mia Stone"` from the replaced profile.
4. **`04` PATCH Update Title** — patch `/items/2` with a new title and return `"Patched title"`.
5. **`05` PATCH Update Status** — patch `/items/1` with `{ "done": true }` and return the boolean `true`.
6. **`06` DELETE No Content** — delete `/items/1` and return the status code `204`, without trying to parse the body.
7. **`07` POST Then GET by ID** — create an item, read the id from the response, request `GET /items/3` and return `"Verify after create"`.
8. **`08` DELETE Then Confirm Missing** — delete `/items/2`, request it again and return the error message `"Item 2 was not found"`.

The practice API lives in [`api/server.js`](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/blob/HEAD/api/server.js) and exposes these routes:

- `GET /items` — the full collection inside `data.results`, plus a `data.count`.
- `GET /items/:id` — a single resource inside `data.item`, or `404` with `{ "error": "Item 2 was not found" }`.
- `POST /items` — answers `201`, a `Location` header and `data.item` with the new id.
- `PUT /items/:id` — answers `200` and `data.item`, or `400` if either `title` or `done` is missing or has the wrong type.
- `PATCH /items/:id` — answers `200` with both `data.item` and a `data.changed` summary.
- `DELETE /items/:id` — answers `204` with an empty body.
- `GET /overview` — an extra payload with several levels of nesting, arrays and orders, perfect for practicing your JSON navigation.
- `GET /health` — a minimal `{ "ok": true }` you can use to confirm the server is up.

## 🎓 What do you need before starting?

- Basic JavaScript: functions, objects, arrays and template literals.
- A working idea of `async`/`await` and promises, because every `solve` function is asynchronous.
- Node.js installed if you work locally; the included dev container uses the Node 20 image.
- The LearnPack CLI, or simply a GitHub Codespace, which installs everything on creation.
- No previous REST experience is required: the welcome step explains the workflow before the first request.

## ✅ How does the automatic grading work?

Each of the 8 exercises ships a `test.js` that Jest runs through LearnPack. The grader does three things:

- **It starts a fresh API for every test.** The shared helper boots `api/server.js` on a random free port of `127.0.0.1` and hands you the URL as the `baseUrl` argument. That is why the state is always the same: two seeded items with ids `1` and `2`, and a counter that assigns `3` to the next one you create.
- **It records every request you make.** `global.fetch` is wrapped so the method and the path of each call are logged, and then it asserts that the expected call really happened. If you return the right value without calling the API, exercise `01` fails with the message "Hardcoded answers do not pass". Exercises `07` and `08` go further and check the *order* of the two requests.
- **It warns you about near misses.** Every test has a second check with a tailored message. Return `false` in `05` and it tells you the `PATCH` change is not reflected; return `3` in `07` and it tells you that you stopped at the `POST` and never sent the follow-up `GET`.

Normally you just press the test button and let LearnPack run the check for the exercise you have open. There is also an `npm run test:sample` script that calls Jest directly on exercise `01`, useful when you want to confirm that the tooling is installed.

## 💡 What mistakes should you avoid?

- **Printing instead of returning.** A `console.log` proves nothing here: the assertions compare the value that `solve(baseUrl)` returns.
- **Hardcoding `http://localhost:3001`.** The grader listens on a random port, so always build your URLs from the `baseUrl` argument, like `` fetch(`${baseUrl}/items`) ``.
- **Using dot notation on keys with spaces.** `item.profile.full name` is a syntax error; the correct form is `item.profile["full name"]`, and the same applies to `meta["request id"]`.
- **Sending the body as a plain object.** The request body has to be a string, so wrap it in `JSON.stringify({ ... })`.
- **Forgetting `done` in the `PUT`.** That endpoint validates both fields: if `title` is not a string or `done` is not a boolean, it answers `400` with `{ "error": "PUT requires title and done" }` and your assertion fails for a reason that has nothing to do with your parsing.
- **Calling `response.json()` after a `DELETE`.** The answer is `204` with an empty body, so parsing it throws; read `response.status` instead.
- **Grabbing the wrong field from a `POST` response.** In `01` the create response also contains `data.audit.createdAt`, a timestamp that looks like a valid answer but is not the id the exercise asks for.
- **Stopping after the first request in `07` and `08`.** Both exercises are explicitly about verifying server state with a second call.

## ❓ Frequently asked questions

### Do I have to run the API myself for the tests to pass?

No. Each test creates its own instance of `api/server.js` on a free port and passes that URL to your function, so the graded run is self-contained. The `npm run api` script, which serves `http://127.0.0.1:3001`, is there so you can explore the endpoints by hand with curl, Postman or Thunder Client while you figure out where the value lives.

### Why does the first item I create always get the id 3?

Because the API is deterministic. It seeds two items, `Map the campus` (id `1`) and `Review nested JSON` (id `2`), and starts its counter at `3`. State lives in memory and resets whenever the server restarts, and every test gets a brand-new server, so results never depend on the order in which you solved the exercises.

### What is the practical difference between PUT and PATCH in these exercises?

`PUT /items/1` in exercise `03` replaces the entire resource, which is why the endpoint demands both `title` and `done` and why the old profile `"Ana Perez"` disappears. `PATCH` in exercises `04` and `05` only modifies the fields you send and returns an extra `data.changed` object with the resulting `title` and `done`, which is the shortcut the tests expect you to find.

### Why does my answer fail if the returned value is correct?

Because the grader also verifies the traffic. It keeps a log of the method and path of every `fetch` call, so returning `204` without ever deleting anything, or returning `"Patched title"` without patching `/items/2`, is rejected with an explicit message. The exercises are designed to be solved by reading a real response.

### Can I use axios or another HTTP client instead of fetch?

Stick to `fetch`. The repository installs no runtime dependencies, and the request log only wraps `global.fetch`, so requests sent through another client would be invisible to the assertions and the test would report that the expected call never happened.

### Is the tutorial free, and can I reuse the code?

Opening the repository and solving the exercises costs nothing, and the solutions you write in each `app.js` are yours. The repository does not include a license file, so no explicit permission is granted to redistribute or republish the statements, the practice API or the tests; if you want to reuse them beyond studying, ask 4Geeks Academy first.

<!-- hide -->
## 📚 Related tutorials

- [Javascript Beginner Tutorial (interactive)](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises) — the fundamentals you need before writing `solve`.
- [Practice Javascript Functions Tutorial](https://4geeks.com/en/interactive-exercise/javascript-functions-exercises-tutorial) — parameters, return values and arrow functions.
- [Learn how to manipulate The DOM with JS](https://4geeks.com/en/interactive-exercise/the-dom-exercises) — the natural next step: painting API data on a page.
- [Master Javascript Practicing](https://4geeks.com/en/interactive-exercise/master-javascript-exercises) — a longer set of drills to consolidate everything.

## 🚀 How to start

The fastest path is a cloud environment, because the dev container installs Jest, LearnPack and the Node plugin on creation and forwards ports 3000 and 3001 for you.

1. Open the repository in [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners) or in [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git).

2. Wait for VS Code to load. LearnPack usually starts on its own; if it does not, run it from the folder that contains `learn.json`:

    ```bash
    learnpack start
    ```

3. If the terminal answers `bash: learnpack: command not found`, rebuild the container or install the tooling by hand:

    ```bash
    npm i @learnpack/learnpack@5.0.13 -g && learnpack plugins:install @learnpack/node@1.1.15
    ```

4. Open exercise `00`, read the note about `baseUrl`, and start solving.

> 💡 In Codespaces or Gitpod, do not assume that `localhost` points to the API from your own browser. Use the forwarded URL that the environment gives you when you want to inspect the endpoints manually.

## 💻 Local installation

1. Clone the repository and enter the folder:

    ```bash
    git clone https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git
    cd interacting-with-apis-for-beginners
    ```

2. Install LearnPack and the Node plugin globally:

    ```bash
    npm run setup:learnpack
    ```

3. Start the tutorial from the project root:

    ```bash
    learnpack start
    ```

4. Optionally, open a second terminal and launch the practice API on `http://127.0.0.1:3001` so you can inspect responses by hand:

    ```bash
    npm run api
    ```

In VS Code this last step is automatic: the workspace defines a task that runs `npm run api` in a dedicated panel when the folder opens.

## 📝 How the exercises are organized

Every folder inside [`exercises/`](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/tree/HEAD/exercises) is one step of the tutorial and contains:

- `README.md` and `README.es.md`: the statement, the request body when there is one, and the expected result.
- `app.js`: the file you edit, with the `solve(baseUrl)` stub already exported.
- `test.js`: the automatic check for that exercise.
- `solution.hide.js`: a reference solution that LearnPack keeps hidden until you ask for it.

The `00-welcome` folder is the exception: it is only an introduction, so it ships just the two READMEs, with no `app.js`, no `test.js` and no solution.

Shared code lives in two places: `api/server.js` holds the practice API, and `tests/shared/api-test-utils.js` holds the helper that boots the server, tracks your requests and runs the assertions.

## 🤝 Contributors

Thanks to [@ehiber](https://github.com/ehiber), [@alesanchezr](https://github.com/alesanchezr), [@marcogonzalo](https://github.com/marcogonzalo) and everyone listed in the [contributors graph](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/graphs/contributors) for the exercises, the tests and the wording.

Fixes, clearer statements and new tests are welcome: open an [issue](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/issues) or send a pull request. This project follows the spirit of the [all-contributors](https://allcontributors.org/) specification.

This tutorial and many others are built for students of [4Geeks Academy](https://4geeksacademy.com/). Learn more about the [Full Stack Developer program](https://4geeksacademy.com/us/coding-bootcamp) and the rest of the learning experiences available at 4Geeks.
<!-- endhide -->
