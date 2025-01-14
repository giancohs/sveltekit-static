# Steps and notes

Important:
- After creating the repository, go to settings, under "Secrets and variables", "Actions", add the secret PERSONAL_TOKEN in order to deploy the project in github pages.

This sveltekit configuration is a personalized template that aims to help with the following:
- Get a ready dev environment with the dependencies to start working on a sveltekit project.
- Automatically deploy and update the current project to the default personal github pages site via github actions.

After cloning the repo, the post-create-command feature will execute the following commands:

- Install the dependencies with `npm install`
- Install the adapter `@sveltejs/adapter-static` with `npm install @sveltejs/adapter-static`
- Install the mapbox-gl package with `npm install mapbox-gl`

After the dependencies are installed, you should change the name of the project in the following files:
- `.github/workflows/deploy.yml`
- `package.json`
- `svelteconfig.js`

The changes in this project for a basic static site and visualizations are:
- The `svelte.config.js` file is changed to use the adapter `@sveltejs/adapter-static`.
- The `+layout.js` file is created inside the `src/routes` folder and the `prerender` property is set to `true`.

If you install a new package, you should add the `--save` flag to the command in order to save the package in the `package.json` file. For example:

```bash
npm install --save @sveltejs/adapter-static
npm install --save mapbox-gl
```

If you are working with tokens and .env files, you need to add the secrets in the github repository secrets. Then, update the github actions workflow to include the secrets. For example:  

```bash
  - name: Create .env file
        run: |
          echo "VITE_MAPBOX_ACCESS_TOKEN=${{ secrets.MAPBOX_TOKEN }}" > .env
```
"VITE_MAPBOX_ACCESS_TOKEN" is the name of token in the .env file locally. "MAPBOX_TOKEN" is the name of the secret in the github repository secrets and it is used in the code to access the token.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
