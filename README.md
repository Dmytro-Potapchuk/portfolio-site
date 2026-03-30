# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Docker deployment (VPS)

This repo now includes production deployment assets:

- `Dockerfile` (multi-stage build + nginx for SPA routing)
- `nginx.conf` (cache + `try_files` for React Router)
- `docker-compose.yml` (runs container on `${APP_PORT}`, default `8080`)
- `.github/workflows/deploy-vps-docker.yml` (build, push, deploy over SSH)

### Required GitHub secrets

Set these in your repository settings:

- `DOCKERHUB_USERNAME` (for example: `keyn1990`)
- `DOCKERHUB_TOKEN` (Docker Hub access token)
- `VPS_HOST` (for example: `192.67.197.185`)
- `VPS_PORT` (usually `22`)
- `VPS_USER` (SSH user on VPS)
- `VPS_SSH_KEY` (private key for the VPS user)
- `VPS_APP_PORT` (for example: `8080`)

### Deployment flow

On push to `main`, `master`, or `Dmytro-Potapchuk-patch-1`:

1. GitHub Actions builds image and pushes `keyn1990/portfolio-site:latest`
2. Action connects to VPS via SSH
3. VPS pulls latest image and runs `docker compose up -d`

The app will be available on `http://<VPS_HOST>:<VPS_APP_PORT>`.
