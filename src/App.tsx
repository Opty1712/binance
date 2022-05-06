import { memo } from 'react';
import { Table, TableColumnProps } from 'antd';
import { data, Data } from './data';
import 'antd/dist/antd.css';
import { getCompanyFilters, getCountryFilters, getDataSource } from './helpers';
import { styled } from 'linaria/react';

export const App = memo(() => {
  return <Table dataSource={getDataSource(data)} columns={columns} />;
});
App.displayName = nameof(App);

const DivRight = styled.div`
  text-align: right;
`;

const dateRender = (date: string) => (
  <DivRight>
    {new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
      year: '2-digit'
    }).format(Date.parse(date))}
  </DivRight>
);

const numberRender = (digits: number) => (
  <DivRight>{new Intl.NumberFormat('en-US').format(digits)}</DivRight>
);

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
    sorter: (a, b) => a.week - b.week,
    render: numberRender,
    align: 'right'
  },
  {
    title: 'Date',
    dataIndex: 'dt',
    key: 'dt',
    sorter: (a, b) => a.dt.length - b.dt.length,
    render: dateRender,
    align: 'right'
  },
  {
    title: 'Visits',
    dataIndex: 'web_visits',
    key: 'web_visits',
    sorter: (a, b) => a.web_visits - b.web_visits,
    render: numberRender,
    align: 'right'
  },
  {
    title: 'Trading Volume',
    dataIndex: 'trading_volume',
    key: 'trading_volume',
    sorter: (a, b) => a.trading_volume - b.trading_volume,
    render: numberRender,
    align: 'right'
  },
  {
    title: 'Coin Price',
    dataIndex: 'coin_price',
    key: 'coin_price',
    sorter: (a, b) => a.coin_price - b.coin_price,
    render: numberRender,
    align: 'right'
  }
];
