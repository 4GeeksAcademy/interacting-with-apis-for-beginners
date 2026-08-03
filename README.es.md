<!-- hide -->
<div align="center">

# API y Navegación de JSON Complejo

[![Certificado por 4Geeks Academy](https://img.shields.io/badge/4Geeks%20Academy-Certified-2563eb)](https://4geeksacademy.com/)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-Autograded-2563eb)](https://learnpack.co/)
[![Abrir en Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-fb5a1f?logo=github)](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners)

</div>

![Portada del tutorial API and Complex JSON Navigation: un banner gris claro con el título en negro y en negrita, la línea by 4Geeks Academy debajo, un bocadillo de chat verde con tres puntos a la derecha y un robot mascota morado con la boca verde sonriente](https://raw.githubusercontent.com/4GeeksAcademy/interacting-with-apis-for-beginners/main/preview.png)

_Estas instrucciones también están [disponibles en inglés](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/blob/HEAD/README.md)._
<!-- endhide -->

Este tutorial es un paquete LearnPack con 8 ejercicios de JavaScript autocorregidos más un paso de bienvenida. Cada ejercicio trabaja contra una API REST local de Node.js con 2 recursos precargados, así que practicas `POST`, `PUT`, `PATCH` y `DELETE`, lees los códigos `201`, `200`, `204`, `400` y `404`, y sacas valores de un JSON anidado con claves incómodas como `profile["full name"]`. El corrector revisa las peticiones que realmente enviaste.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad:** fácil (nivel principiante, `"difficulty": "EASY"` en `learn.json`).
- **Duración estimada:** 8 horas.
- **Tecnologías:** JavaScript, JSON, API REST, Fetch API, HTTP, CRUD.
- **Ejercicios:** 9 pasos en total — 1 de bienvenida y 8 evaluados, cada uno con su propio `test.js`.
- **Corrección:** automática y aislada, con Jest ejecutado por LearnPack.
- **Idiomas:** todos los enunciados están en español y en inglés.
- **Requisitos:** sin claves de API, sin cuentas y sin llamadas a internet — la API de práctica viene dentro del repositorio.
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

- A enviar un cuerpo de petición con `fetch`, `JSON.stringify` y la opción `method`, en lugar de quedarte solo en el `GET` de toda la vida.
- La diferencia real entre `PUT` (reemplaza el recurso completo) y `PATCH` (toca únicamente los campos que mandas).
- A leer el código de estado desde el objeto de respuesta con `response.status`, y a reconocer cuándo el cuerpo viene vacío y no hay nada que parsear.
- A recorrer un sobre JSON anidado: `data.item`, `data.results`, `data.changed`, `data.audit` y el `error` de primer nivel.
- A llegar a claves que la notación de punto no puede alcanzar, como `profile["full name"]`, `meta["request id"]` y `meta["api-version"]`.
- A encadenar peticiones donde la segunda depende del resultado de la primera, por ejemplo crear un recurso y luego pedirlo por su id nuevo.
- Por qué una API REST responde `201` al crear, `204` al borrar, `400` ante un cuerpo inválido y `404` cuando el recurso ya no está.

## 👀 ¿Qué vas a construir?

En cada `app.js` completas la función `async function solve(baseUrl)` y **devuelves** el valor que pide el enunciado. Estos son los 8 ejercicios evaluados, después del paso `00` de bienvenida:

1. **`01` POST Create Item** — envía `POST /items` con `{ "title": "Practice POST requests" }` y devuelve el id del nuevo recurso, que es `3`.
2. **`02` POST Create Item With Fields** — manda un cuerpo más completo con `profile`, `contact`, `stats.scores` y `tags`, y devuelve `"Sara Vega"`, el valor guardado en `profile["full name"]`.
3. **`03` PUT Replace Item** — reemplaza por completo `/items/1` y devuelve `"Mia Stone"` desde el perfil nuevo.
4. **`04` PATCH Update Title** — parchea `/items/2` con otro título y devuelve `"Patched title"`.
5. **`05` PATCH Update Status** — parchea `/items/1` con `{ "done": true }` y devuelve el booleano `true`.
6. **`06` DELETE No Content** — borra `/items/1` y devuelve el código `204`, sin intentar parsear el cuerpo.
7. **`07` POST Then GET by ID** — crea un recurso, lee el id de la respuesta, pide `GET /items/3` y devuelve `"Verify after create"`.
8. **`08` DELETE Then Confirm Missing** — borra `/items/2`, vuelve a pedirlo y devuelve el mensaje de error `"Item 2 was not found"`.

La API de práctica vive en [`api/server.js`](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/blob/HEAD/api/server.js) y expone estas rutas:

- `GET /items` — la colección completa dentro de `data.results`, más un `data.count`.
- `GET /items/:id` — un recurso dentro de `data.item`, o un `404` con `{ "error": "Item 2 was not found" }`.
- `POST /items` — responde `201`, una cabecera `Location` y el recurso nuevo en `data.item`.
- `PUT /items/:id` — responde `200` y `data.item`, o `400` si falta `title` o `done`, o si alguno llega con el tipo equivocado.
- `PATCH /items/:id` — responde `200` con `data.item` y además un resumen en `data.changed`.
- `DELETE /items/:id` — responde `204` con el cuerpo vacío.
- `GET /overview` — un payload extra con varios niveles de anidamiento, arrays y pedidos, ideal para practicar la navegación por JSON.
- `GET /health` — un `{ "ok": true }` mínimo para confirmar que el servidor está levantado.

## 🎓 ¿Qué necesitas antes de empezar?

- JavaScript básico: funciones, objetos, arrays y template literals.
- Manejarte con `async`/`await` y promesas, porque todas las funciones `solve` son asíncronas.
- Node.js instalado si trabajas en local; el contenedor incluido usa la imagen de Node 20.
- El CLI de LearnPack, o directamente un GitHub Codespace, que instala todo al crearse.
- No hace falta experiencia previa con REST: el paso de bienvenida explica la mecánica antes de la primera petición.

## ✅ ¿Cómo funciona la corrección automática?

Cada uno de los 8 ejercicios trae un `test.js` que Jest ejecuta a través de LearnPack. El corrector hace tres cosas:

- **Levanta una API nueva en cada test.** El helper compartido arranca `api/server.js` en un puerto libre aleatorio de `127.0.0.1` y te pasa la URL como argumento `baseUrl`. Por eso el estado siempre es el mismo: dos recursos precargados con ids `1` y `2`, y un contador que asignará el `3` al siguiente que crees.
- **Registra todas tus peticiones.** `global.fetch` se envuelve para anotar el método y la ruta de cada llamada, y después comprueba que la petición esperada ocurrió de verdad. Si devuelves el valor correcto sin llamar a la API, el ejercicio `01` falla con el mensaje "Hardcoded answers do not pass". Los ejercicios `07` y `08` van más allá y verifican el *orden* de las dos peticiones.
- **Te avisa cuando te quedas cerca.** Cada test tiene una segunda comprobación con un mensaje a medida. Si devuelves `false` en el `05`, te dice que el cambio del `PATCH` no se está reflejando; si devuelves `3` en el `07`, te dice que te quedaste en el `POST` y nunca hiciste el `GET` de verificación.

Lo normal es pulsar el botón de test y dejar que LearnPack corrija el ejercicio que tienes abierto. También existe el script `npm run test:sample`, que llama a Jest directamente sobre el ejercicio `01`, útil para confirmar que las herramientas están instaladas.

## 💡 ¿Qué errores conviene evitar?

- **Imprimir en vez de devolver.** Un `console.log` aquí no cuenta: la comprobación compara el valor que retorna `solve(baseUrl)`.
- **Escribir a mano `http://localhost:3001`.** El corrector escucha en un puerto aleatorio, así que construye siempre las URLs a partir del argumento `baseUrl`, por ejemplo `` fetch(`${baseUrl}/items`) ``.
- **Usar notación de punto con claves que llevan espacios.** `item.profile.full name` es un error de sintaxis; la forma correcta es `item.profile["full name"]`, y lo mismo aplica a `meta["request id"]`.
- **Mandar el cuerpo como objeto.** El body tiene que ser texto, así que envuélvelo en `JSON.stringify({ ... })`.
- **Olvidar `done` en el `PUT`.** Ese endpoint valida los dos campos: si `title` no es un string o `done` no es un booleano, responde `400` con `{ "error": "PUT requires title and done" }` y tu test falla por un motivo que no tiene nada que ver con cómo lees el JSON.
- **Llamar a `response.json()` después de un `DELETE`.** La respuesta es `204` con el cuerpo vacío, así que parsearla lanza un error; lee `response.status`.
- **Coger el campo equivocado de la respuesta del `POST`.** En el `01` la respuesta también trae `data.audit.createdAt`, una fecha que parece una respuesta válida pero no es el id que pide el enunciado.
- **Parar en la primera petición en el `07` y el `08`.** Los dos ejercicios tratan precisamente de confirmar el estado del servidor con una segunda llamada.

## ❓ Preguntas frecuentes

### ¿Tengo que arrancar la API yo para que pasen los tests?

No. Cada test crea su propia instancia de `api/server.js` en un puerto libre y le pasa esa URL a tu función, así que la corrección es autocontenida. El script `npm run api`, que sirve en `http://127.0.0.1:3001`, está ahí para que explores los endpoints a mano con curl, Postman o Thunder Client mientras averiguas dónde está el valor que buscas.

### ¿Por qué el primer recurso que creo siempre tiene el id 3?

Porque la API es determinista. Precarga dos recursos, `Map the campus` (id `1`) y `Review nested JSON` (id `2`), y arranca su contador en `3`. El estado vive en memoria y se reinicia cada vez que el servidor vuelve a levantarse, y cada test recibe un servidor recién creado, así que el resultado nunca depende del orden en el que resolviste los ejercicios.

### ¿Cuál es la diferencia práctica entre PUT y PATCH en estos ejercicios?

El `PUT /items/1` del ejercicio `03` reemplaza el recurso entero, y por eso el endpoint exige `title` y `done` y por eso desaparece el perfil anterior `"Ana Perez"`. El `PATCH` de los ejercicios `04` y `05` solo modifica los campos que envías y devuelve además un objeto `data.changed` con el `title` y el `done` resultantes, que es justo el atajo que los tests esperan que encuentres.

### ¿Por qué falla mi respuesta si el valor devuelto es correcto?

Porque el corrector también revisa el tráfico. Guarda un registro del método y la ruta de cada `fetch`, así que devolver `204` sin haber borrado nada, o devolver `"Patched title"` sin haber parcheado `/items/2`, se rechaza con un mensaje explícito. Los ejercicios están pensados para resolverse leyendo una respuesta real.

### ¿Puedo usar axios u otro cliente HTTP en vez de fetch?

Quédate con `fetch`. El repositorio no instala dependencias de ejecución y el registro de peticiones solo envuelve `global.fetch`, así que las llamadas hechas con otro cliente serían invisibles para las comprobaciones y el test diría que la petición esperada nunca ocurrió.

### ¿El tutorial es gratis y puedo reutilizar el código?

Abrir el repositorio y resolver los ejercicios no cuesta nada, y las soluciones que escribes en cada `app.js` son tuyas. El repositorio no incluye fichero de licencia, así que no se concede permiso explícito para redistribuir ni republicar los enunciados, la API de práctica o los tests; si quieres reutilizarlos más allá de estudiar, pregunta antes a 4Geeks Academy.

<!-- hide -->
## 📚 Tutoriales relacionados

- [Tutorial para Principiantes de Javascript (Interactivo)](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes) — las bases que necesitas antes de escribir tu primer `solve`.
- [Tutorial para Practicar Funciones de Javascript](https://4geeks.com/es/interactive-exercise/javascript-functions-exercises-tutorial-es) — parámetros, valores de retorno y funciones flecha.
- [Aprende cómo manipular el DOM con JavaScript](https://4geeks.com/es/interactive-exercise/the-dom-exercises-es) — el paso natural siguiente: pintar en pantalla los datos de la API.
- [Domina Javascript Practicando](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es) — una tanda más larga de ejercicios para consolidarlo todo.

## 🚀 ¿Cómo empezar?

El camino más rápido es un entorno en la nube, porque el contenedor de desarrollo instala Jest, LearnPack y el plugin de Node al crearse, y ya te reenvía los puertos 3000 y 3001.

1. Abre el repositorio en [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners) o en [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git).

2. Espera a que cargue VS Code. LearnPack suele arrancar solo; si no lo hace, lánzalo desde la carpeta que contiene `learn.json`:

    ```bash
    learnpack start
    ```

3. Si la terminal responde `bash: learnpack: command not found`, reconstruye el contenedor o instala las herramientas a mano:

    ```bash
    npm i @learnpack/learnpack@5.0.13 -g && learnpack plugins:install @learnpack/node@1.1.15
    ```

4. Abre el ejercicio `00`, lee la nota sobre `baseUrl` y empieza a resolver.

> 💡 En Codespaces o Gitpod no des por hecho que `localhost` apunta a la API desde tu propio navegador. Usa la URL reenviada que te da el entorno cuando quieras inspeccionar los endpoints a mano.

## 💻 Instalación local

1. Clona el repositorio y entra en la carpeta:

    ```bash
    git clone https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git
    cd interacting-with-apis-for-beginners
    ```

2. Instala LearnPack y el plugin de Node de forma global:

    ```bash
    npm run setup:learnpack
    ```

3. Arranca el tutorial desde la raíz del proyecto:

    ```bash
    learnpack start
    ```

4. Si quieres, abre una segunda terminal y levanta la API de práctica en `http://127.0.0.1:3001` para inspeccionar respuestas a mano:

    ```bash
    npm run api
    ```

En VS Code este último paso es automático: el workspace define una tarea que ejecuta `npm run api` en un panel dedicado al abrir la carpeta.

## 📝 Cómo están organizados los ejercicios

Cada carpeta dentro de [`exercises/`](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/tree/HEAD/exercises) es un paso del tutorial y contiene:

- `README.md` y `README.es.md`: el enunciado, el cuerpo de la petición cuando lo hay y el resultado esperado.
- `app.js`: el fichero que editas, con la función `solve(baseUrl)` ya exportada como plantilla.
- `test.js`: la comprobación automática de ese ejercicio.
- `solution.hide.js`: una solución de referencia que LearnPack mantiene oculta hasta que la pides.

La carpeta `00-welcome` es la excepción: como es solo una introducción, únicamente trae los dos README, sin `app.js`, sin `test.js` y sin solución.

El código compartido vive en dos sitios: `api/server.js` contiene la API de práctica y `tests/shared/api-test-utils.js` contiene el helper que levanta el servidor, rastrea tus peticiones y ejecuta las comprobaciones.

## 🤝 Colaboradores

Gracias a [@ehiber](https://github.com/ehiber), [@alesanchezr](https://github.com/alesanchezr), [@marcogonzalo](https://github.com/marcogonzalo) y a todas las personas que aparecen en el [gráfico de colaboradores](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/graphs/contributors) por los ejercicios, los tests y la redacción.

Las correcciones, los enunciados más claros y los tests nuevos son bienvenidos: abre un [issue](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/issues) o manda un pull request. Este proyecto sigue el espíritu de la especificación [all-contributors](https://allcontributors.org/).

Este tutorial y muchos otros están hechos para estudiantes de [4Geeks Academy](https://4geeksacademy.com/). Puedes conocer más sobre el [programa Full Stack Developer](https://4geeksacademy.com/us/coding-bootcamp) y el resto de experiencias de aprendizaje de 4Geeks.
<!-- endhide -->
