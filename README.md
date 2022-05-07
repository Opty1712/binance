# Binance technical task.

As it is Proof of Concept I made a fork from my own react-starter-kit.
I guess that `week` is an extra information as we have `dt`, so I decided to skip it.
Also I think that `id` is the ID of the company, not ID of the current record.
Not enough time to clarify these statements, so I developed app keeping that in mind.

## Run project:
1. Install all dependencies with `yarn`
2. Run `yarn dev` for development or `yarn build && yarn start` for production build
3. Navigate your browser to [app](http://localhost:3000/)


## Unit tests:
Run `yarn test:watch` for development or `yarn test` for ordinary run.


## Healthcheck
Run `yarn healthcheck` to check if no Typescript / EsLint errors, code style / commit names are fine, unit tests pass, production build is compiled.
