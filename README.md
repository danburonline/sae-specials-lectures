# SAE Example

## Quick start

This repo uses Devcontainers to provide a consistent development environment. To get started, you need to have Docker and VS Code installed. Then, open the repo in VS Code and click on the green button in the bottom left corner. Select `Reopen in Container`. This will build the Docker image and start the container. Once the image is built and the container is running, it will run the [`postCreateCommand`](/.devcontainer/scripts/post_create.sh) which will install the dependencies and do some other tools.

As soon as everything is installed, you can run the backend and frontend with the following commands:

```sh
bun run dev:all
```

This will start the backend and frontend in development mode. The backend will be available on <http://localhost:8000> and the frontend on <http://localhost:3000>.

### Quick Architecture

Both backend and frontend are written in TypeScript. We use Node.js as our runtime and Bun as our dependency manager. The backend uses Nest.js as a web framework and the frontend uses Next.js. The backend uses Postgres as a database and Redis as a cache. On the frontend, we use TailwindCSS as a CSS framework and React Three Fiber to render the 3D scenes.

---

## Tasks

- TODO: Create an endpoint that returns colors stored on Postgres
- TODO: Create a search bar that allows to search for colors with a dropdown on the frontend
- TODO: Create a new endpoint that returns the colors based on the search term
- TODO: Store the recently searched colors in Redis
- TODO: Show the recently searched colors on the frontend

## Bugs

- TODO: Error handling and sanitization on the backend

## Technical

- TODO: Add a GitHub Action to format check and lint the code
- TODO: Update Bun from 1.0.13 to 1.0.14
- TODO: Enable logger on the backend

## Hard

- TODO: Make the server-side debugger work for Next.js 😅
- TODO: Fix the display of textures that they point in the right direction
- TODO: Create a native app out of the frontend with Capacitor.js
