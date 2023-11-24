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

### API

You can inspect the current APIs functionality in the [`docs/api`](./docs/api/spec.json) folder. The API is documented with a Postman specification file. You can import this file into Postman or Hoppscotch to test the API.

## GitHub Actions

Push Request Quality Check

We have enhanced our development process by incorporating GitHub Actions for continuous integration. This update ensures that your code undergoes rigorous testing and formatting checks before being merged into the main branch.
Before merging your changes, GitHub Actions will verify the scripts, ensuring they meet our formatting standards and pass relevant checks. This guarantees the maintenance of code quality and consistency across the repository.
Feel confident in the reliability of your contributions, and thank you for your commitment to maintaining code excellence in our project!
