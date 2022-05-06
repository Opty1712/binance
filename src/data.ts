export const data: Data[] = [
  {
    id: 'b321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
    country: 'SG',
    company: 'ToTheMoon',
    web_visits: 4832,
    trading_volume: 4961361,
    coin_price: 718
  },
  {
    id: 'a321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2021-02-26',
    week: 1,
    country: 'SG',
    company: 'MyCoin',
    web_visits: 12,
    trading_volume: 6423456763423,
    coin_price: 0.5
  },
  {
    id: '0321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-01-26',
    week: 13,
    country: 'UK',
    company: 'OverTheHills',
    web_visits: 6333,
    trading_volume: 345,
    coin_price: 34
  },
  {
    id: '1321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2021-02-05',
    week: 5,
    country: 'US',
    company: 'InTheDark',
    web_visits: 673577,
    trading_volume: 633234,
    coin_price: 9877
  },
  {
    id: '2321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2019-02-06',
    week: 32,
    country: 'US',
    company: 'BetterFuture',
    web_visits: 346767,
    trading_volume: 7654345,
    coin_price: 12
  }
];

export type Data = {
  id: string;
  dt: string;
  week: number;
  country: string;
  company: string;
  web_visits: number;
  trading_volume: number;
  coin_price: number;
};
