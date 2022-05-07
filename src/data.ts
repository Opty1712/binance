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
    id: 'b321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-19',
    week: 8,
    country: 'SG',
    company: 'ToTheMoon',
    web_visits: 4567,
    trading_volume: 57878783,
    coin_price: 704
  },
  {
    id: 'b321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-12',
    week: 7,
    country: 'SG',
    company: 'ToTheMoon',
    web_visits: 5323,
    trading_volume: 7433456,
    coin_price: 755
  },

  {
    id: 'a321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
    country: 'SG',
    company: 'MyCoin',
    web_visits: 12,
    trading_volume: 6423456763423,
    coin_price: 0.5
  },
  {
    id: 'a321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-19',
    week: 8,
    country: 'SG',
    company: 'MyCoin',
    web_visits: 8,
    trading_volume: 63433356664,
    coin_price: 0.8
  },

  {
    id: '0321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
    country: 'UK',
    company: 'OverTheHills',
    web_visits: 6333,
    trading_volume: 345,
    coin_price: 34
  },
  {
    id: '1321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
    country: 'US',
    company: 'InTheDark',
    web_visits: 673577,
    trading_volume: 633234,
    coin_price: 9877
  },
  {
    id: '2321c425-c2c9-489b-9596-736bccc55e8e',
    dt: '2022-02-26',
    week: 9,
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
