# Notes

This sveltekit configuration is only for basic static site and visualizations.

When you want to deploy to github static site, you need to install the adapter `@sveltejs/adapter-static`. 
Run `npm install @sveltejs/adapter-static`

Then create a `+layout.js` file inside the `src/routes` folder and add the following code:

```js
export const prerender = true;
```

Then change the `svelte.config.js` file to the following:

```js
import adapter from '@sveltejs/adapter-static';
```
You should also change the names of the project in the following files:
- `.github/workflows/deploy.yml`
- `package.json`
- `svelteconfig.js`

Then, if you install a new package, you should add the `--save` flag to the command. For example:

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

# General steps

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

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
