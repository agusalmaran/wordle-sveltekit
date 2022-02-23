# Wordle Game with SvelteKit

Implemetation of the Wordle Game (https://www.nytimes.com/games/wordle/index.html) using SvelteKit.
The original game is a SPA with all the game logic included in it but this is an application with a backend API.
It means that the logic in charge of check the guess of the user is happening in the backend.

## Install de dependecies

If you're seeing this, you've probably already done this step. Congrats!

```bash
npm install
```

## Developing

Once you've installed dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing

You can test the app with:

```bash
# Run unit tests
npm run test

# Watch unit tests
npm run test -- --watch

# Run acceptance tests (You need the app up and running: `npm run dev`)
npm run test:acceptance
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment.
