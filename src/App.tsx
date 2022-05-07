import { memo, useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableColumnProps,
  TableProps,
  PageHeader,
  Typography
} from 'antd';
import 'antd/dist/antd.css';

import { data } from './data';
import {
  getCompanyFilters,
  getCountryFilters,
  getDataSource,
  getDataByChartKey,
  chartKeys,
  getCompanyColors,
  sortDataByTime
} from './helpers';
import { Chart } from './components';
import { chartNames } from './constants';
import { Data, DataByChartKey } from './types';

export const App = memo(() => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const rowSelection: TableProps<Data>['rowSelection'] = useMemo(
    () => ({
      onChange: (selectedRowKeys: React.Key[]) => {
        setSelectedIds(selectedRowKeys.map((item) => String(item)));
      },
      type: 'checkbox'
    }),
    []
  );

  const dataSource = useMemo(() => getDataSource(data), []);

  const dataByChartKey: DataByChartKey = useMemo(
    () => getDataByChartKey(data, selectedIds),
    [selectedIds]
  );

  useEffect(() => {
    getCompanyColors(data);
  }, []);

  return (
    <>
      <PageHeader title="Companies comparision" />
      <Typography.Text type="warning">
        Sort or filter companies from the table below and select particular
        companies by pressing «checkbox» at the left of the row.
      </Typography.Text>

      <br />
      <br />

      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection}
      />

      <br />
      <br />

      {chartKeys.map((item) => {
        const chartData = dataByChartKey[item];
        sortDataByTime(chartData);

        return <Chart key={item} chartKey={item} data={chartData} />;
      })}
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

const columns: TableColumnProps<Data>[] = [
  {
    title: chartNames['company'],
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
    title: chartNames['country'],
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.localeCompare(b.country),
    filters: getCountryFilters(data),
    onFilter: (value, record) => record.country.indexOf(String(value)) === 0
  },
  {
    title: chartNames['dt'],
    dataIndex: 'dt',
    key: 'dt',
    sorter: (a, b) => Date.parse(a.dt) - Date.parse(b.dt),
    render: renderDate,
    align: 'right'
  },
  {
    title: chartNames['web_visits'],
    dataIndex: 'web_visits',
    key: 'web_visits',
    sorter: (a, b) => a.web_visits - b.web_visits,
    render: renderNumber,
    align: 'right'
  },
  {
    title: chartNames['trading_volume'],
    dataIndex: 'trading_volume',
    key: 'trading_volume',
    sorter: (a, b) => a.trading_volume - b.trading_volume,
    render: renderFinance,
    align: 'right'
  },
  {
    title: chartNames['coin_price'],
    dataIndex: 'coin_price',
    key: 'coin_price',
    sorter: (a, b) => a.coin_price - b.coin_price,
    render: renderFinance,
    align: 'right'
  }
];
