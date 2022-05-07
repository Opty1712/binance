import { Data } from './types';

export const chartNames: Record<keyof Data, string> = {
  coin_price: 'Coin Price',
  trading_volume: 'Trading Volume',
  web_visits: 'Web Visits',
  company: 'Company',
  country: 'Country',
  dt: 'Date of Last Data',
  id: 'ID',
  week: 'Week'
};
