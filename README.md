# Binance technical task.

Given that we have array of such items in JSON:
```
{
    id: 'b321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
    country: 'SG',
    company: 'ToTheMoon',
    web_visits: 4832,
    trading_volume: 4961361,
    coin_price: 718
  }
```
create MVP to show how these data can be viewed and compared by several keys.

## Solution

Here is the deployed app:

→→→→→→→→→→ 🔥 **<a href="https://binance-tech-task.vercel.app/" target="_blank">Demo</a>** 🔥 ←←←←←←←←←←

## Run project:
1. Install all dependencies with `yarn`
2. Run `yarn dev` for development or `yarn build && yarn start` for production build
3. Navigate your browser to [app](http://localhost:3000/)


## Unit tests:
Run `yarn test:watch` for development or `yarn test` for ordinary run.


## Healthcheck
Run `yarn healthcheck` to check if no Typescript / EsLint errors, code style / commit names are fine, unit tests pass, production build is compiled.
