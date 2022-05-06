import { memo } from 'react';
import { Table, TableColumnProps } from 'antd';
import { data, Data } from './data';
import 'antd/dist/antd.css';

export const App = memo(() => {
  return <Table dataSource={dataSource} columns={columns} />;
});
App.displayName = nameof(App);

type Source = Data & {
  key: string;
};

const dataSource: Source[] = data.map((item) => ({ ...item, key: item.id }));

const columns: TableColumnProps<Data>[] = [
  {
    title: 'Week',
    dataIndex: 'week',
    key: 'week',
    sorter: (a, b) => a.week - b.week
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.length - b.country.length
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    sorter: (a, b) => a.company.length - b.company.length
  },
  {
    title: 'Date',
    dataIndex: 'dt',
    key: 'dt',
    sorter: (a, b) => a.dt.length - b.dt.length
  },
  {
    title: 'Visits',
    dataIndex: 'web_visits',
    key: 'web_visits',
    sorter: (a, b) => a.web_visits - b.web_visits
  },
  {
    title: 'Trading Volume',
    dataIndex: 'trading_volume',
    key: 'trading_volume',
    sorter: (a, b) => a.trading_volume - b.trading_volume
  },
  {
    title: 'Coin Price',
    dataIndex: 'coin_price',
    key: 'coin_price',
    sorter: (a, b) => a.coin_price - b.coin_price
  }
];
