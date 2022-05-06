import { memo } from 'react';
import { Table, TableColumnProps } from 'antd';
import { data, Data } from './data';
import 'antd/dist/antd.css';
import { getCompanyFilters, getCountryFilters, getDataSource } from './helpers';

export const App = memo(() => {
  return <Table dataSource={getDataSource(data)} columns={columns} />;
});
App.displayName = nameof(App);

/**
 * Columns description + actions
 */
const columns: TableColumnProps<Data>[] = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    sorter: (a, b) => a.company.localeCompare(b.company),
    filters: getCompanyFilters(data),
    onFilter: (value, record) => record.company.startsWith(String(value)),
    filterSearch: (input, record) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Not valid built-in type fo `value` in AntD
      record.value.toLowerCase().indexOf(input.toLowerCase()) > -1
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.localeCompare(b.country),
    filters: getCountryFilters(data),
    onFilter: (value, record) => record.country.indexOf(String(value)) === 0
  },
  {
    title: 'Week',
    dataIndex: 'week',
    key: 'week',
    sorter: (a, b) => a.week - b.week
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
