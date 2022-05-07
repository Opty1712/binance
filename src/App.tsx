import { memo, useMemo, useState } from 'react';
import { Table, TableColumnProps, TableProps } from 'antd';
import { data, Data } from './data';
import 'antd/dist/antd.css';
import { getCompanyFilters, getCountryFilters, getDataSource } from './helpers';

export const App = memo(() => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const rowSelection: TableProps<Data>['rowSelection'] = useMemo(
    () => ({
      onChange: (selectedRowKeys: React.Key[]) => {
        setSelectedCompanies(selectedRowKeys.map((item) => String(item)));
      },
      type: 'checkbox'
    }),
    []
  );

  const dataSource = useMemo(() => getDataSource(data), []);

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection}
      />
      <br />
      <br />
    </>
  );
});
App.displayName = nameof(App);

const renderDate = (date: string) => (
  <>
    {new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
      year: '2-digit'
    }).format(Date.parse(date))}
  </>
);

const renderNumber = (digits: number) => (
  <>{new Intl.NumberFormat('en-US').format(digits)}</>
);

const renderFinance = (digits: number) => (
  <>
    {new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(digits)}
  </>
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
    title: 'Date of Last Data',
    dataIndex: 'dt',
    key: 'dt',
    sorter: (a, b) => Date.parse(a.dt) - Date.parse(b.dt),
    render: renderDate,
    align: 'right'
  },
  {
    title: 'Visits',
    dataIndex: 'web_visits',
    key: 'web_visits',
    sorter: (a, b) => a.web_visits - b.web_visits,
    render: renderNumber,
    align: 'right'
  },
  {
    title: 'Trading Volume',
    dataIndex: 'trading_volume',
    key: 'trading_volume',
    sorter: (a, b) => a.trading_volume - b.trading_volume,
    render: renderFinance,
    align: 'right'
  },
  {
    title: 'Coin Price',
    dataIndex: 'coin_price',
    key: 'coin_price',
    sorter: (a, b) => a.coin_price - b.coin_price,
    render: renderFinance,
    align: 'right'
  }
];
