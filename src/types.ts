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

export type Filter = {
  text: string;
  value: string;
};

export type ChartKey = keyof Pick<
  Data,
  'coin_price' | 'trading_volume' | 'web_visits'
>;

export type ChartItem = Record<string, string | number>;
type ChartItems = Record<string, ChartItem>;
export type DataRecordByChartKey = Record<ChartKey, ChartItems>;
export type DataByChartKey = Record<ChartKey, ChartItem[]>;
