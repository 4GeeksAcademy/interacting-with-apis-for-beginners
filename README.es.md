# Interactuando Con APIs Para Principiantes

<!-- hide -->
> Por [@ehiber](https://github.com/ehibe) y [colaboradores](https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners/graphs/contributors) de [4Geeks Academy](https://4geeksacademy.com/)

_Estas instrucciones estan [disponibles en ingles](./README.md)._

Este LearnPack ayuda a practicar peticiones HTTP y navegacion de JSON con ejercicios pequenos y autoevaluados en JavaScript.

## Antes de comenzar

Puedes abrir este proyecto en [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/interacting-with-apis-for-beginners) o [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/interacting-with-apis-for-beginners.git).

> Una vez abierto VS Code, LearnPack puede iniciar automaticamente. Si no ocurre, ejecuta `learnpack start` desde la carpeta que contiene `learn.json`.
> Si en Codespaces aparece `bash: learnpack: command not found`, reconstruye o recrea el contenedor para que `.devcontainer` instale LearnPack, o ejecuta `npm install -g @learnpack/learnpack && learnpack plugins:install @learnpack/node@1.1.15`.

## Instalacion local

1. Instala LearnPack de forma global y asegurate de tener Node.js 16+:

```bash
npm install -g @learnpack/learnpack
```

2. Desde la raiz del proyecto, inicia el tutorial:

```bash
learnpack start
```

3. En una segunda terminal, inicia la API local de practica:

```bash
npm run api
```

> Si estas trabajando en local, la API corre en `http://127.0.0.1:3000`.
> Si estas trabajando en Codespaces u otro entorno en la nube, no asumas `localhost` desde tu computadora. Usa la URL reenviada por el entorno y pasa ese valor como `baseUrl` cuando sea necesario.

<!-- endhide -->

Este tutorial ensena a consumir una API y extraer valores desde respuestas JSON anidadas usando JavaScript.

## Que practicara el estudiante

- Leer valores planos desde respuestas JSON.
- Acceder a objetos anidados con dot notation.
- Acceder a claves con espacios o guiones usando bracket notation.
- Leer arreglos y arreglos de objetos.
- Mezclar acceso por objeto y arreglo en una misma ruta.
- Hacer peticiones `GET`, `POST`, `PUT`, `PATCH` y `DELETE`.

## Estructura del proyecto

- `api/`: API local usada por los ejercicios.
- `exercises/`: 12 ejercicios incrementales.
- `tests/shared/`: helpers compartidos para los tests.

## Flujo sugerido

1. Ejecuta `learnpack start` desde la raiz del proyecto.
2. Ejecuta `npm run api` en una terminal separada.
3. Abre una carpeta de ejercicio y completa `app.js`.
4. Lee el enunciado para decidir a que endpoint llamar.
5. Retorna el valor esperado desde `solve(baseUrl)`.
6. Usa el feedback de LearnPack para iterar hasta pasar el test.

## Endpoints de la API

- `GET /overview`
- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `PATCH /items/:id`
- `DELETE /items/:id`

## Notas

- La API es deterministica y se reinicia cada vez que el servidor vuelve a arrancar.
- No requiere autenticacion.
- Postman o Thunder Client pueden ayudarte a inspeccionar las respuestas mientras resuelves los ejercicios.

## Colaboradores

Gracias a todas las personas que mejoran estos ejercicios con correcciones, cambios de redaccion, nuevos tests y mejores explicaciones para estudiantes.

Todo tipo de contribucion es bienvenido. Si encuentras un problema, puedes abrir un pull request o contribuir directamente.

Este proyecto sigue el espiritu de la especificacion [all-contributors](https://allcontributors.org/).

Este y muchos otros ejercicios fueron creados para estudiantes de [4Geeks Academy](https://4geeksacademy.com/). Puedes conocer mas sobre el [programa Full Stack Developer](https://4geeksacademy.com/us/coding-bootcamp) y otras experiencias de aprendizaje de 4Geeks.
