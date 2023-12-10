# Maciaszek Portfolio

The website is a static HTML, CSS (PostCSS) and vanilla JS website. For the development purposes (preview, build) it uses vite.

## Dependencies

Install dependencies by running:

```sh
# use correct version of node
nvm use

# install dependencies
pnpm install
```

## Working on the project

The easiest way is to run `dev` process and get access to preview in the browser:

```sh
pnpm run dev
```

Vite provides hot reloading - any change is immediately available in the browser.

## Build for production (manually)

Once the website is ready for production, it can be built:

```sh
pnpm run build
```

The command will create a `dist` directory with all files required for the website to be deployed.

## Build for production (github actions)

The github repo should be setup in a way that the project is automatically built and deployed whenever a new commit is pushed to the `main` branch. 

[See the guide here](https://vitejs.dev/guide/static-deploy.html#github-pages)