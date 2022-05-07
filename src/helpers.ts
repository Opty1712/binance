import randomcolor from 'randomcolor';
import {
  ChartItem,
  ChartKey,
  Data,
  DataByChartKey,
  DataRecordByChartKey,
  Filter
} from './types';

export const getCompanyFilters = (data: Data[]): Filter[] => {
  return data.map(({ company }) => ({
    text: company,
    value: company
  }));
};

export const getCountryFilters = (data: Data[]): Filter[] => {
  const { countryFilters } = data.reduce<{
    existingCountries: Record<string, 1>;
    countryFilters: Filter[];
  }>(
    (accumulator, { country }) => {
      if (!accumulator.existingCountries[country]) {
        accumulator.existingCountries[country] = 1;
        accumulator.countryFilters.push({
          text: country,
          value: country
        });
      }

      return accumulator;
    },
    { existingCountries: {}, countryFilters: [] }
  );

  return countryFilters;
};

export const getDataSource = (data: Data[]) => {
  const filteredDataByLastDate = data.reduce<Record<string, Data>>(
    (accumulator, current) => {
      if (!accumulator[current.id]) {
        accumulator[current.id] = current;
      } else {
        const isCurrentLater = Boolean(
          Date.parse(accumulator[current.id].dt) > Date.parse(current.dt)
        );

        if (isCurrentLater) {
          accumulator[current.id] = current;
        }
      }

      return accumulator;
    },
    {}
  );

  return Object.keys(filteredDataByLastDate).map((item) => ({
    ...filteredDataByLastDate[item],
    key: filteredDataByLastDate[item].id
  }));
};

export const chartKeys: ChartKey[] = [
  'coin_price',
  'trading_volume',
  'web_visits'
];

export const getDataByChartKey = (
  data: Data[],
  selectedIds: string[]
): DataByChartKey => {
  const dataByDate: DataRecordByChartKey = {
    coin_price: {},
    trading_volume: {},
    web_visits: {}
  };

  data.forEach((item) => {
    updateDataByChartKey(dataByDate, item, selectedIds);
  });

  const dataByChartKey = chartKeys.reduce<DataByChartKey>(
    (accumulator, current) => {
      const entries = Object.entries(dataByDate[current]);
      accumulator[current] = entries.map(([dt, chartData]) => ({
        name: dt,
        ...chartData
      }));

      return accumulator;
    },
    {
      coin_price: [],
      trading_volume: [],
      web_visits: []
    }
  );

  return dataByChartKey;
};

const updateDataByChartKey = (
  dataByDate: DataRecordByChartKey,
  dataItem: Data,
  selectedIds: string[]
) => {
  chartKeys.forEach((chartKey) => {
    if (selectedIds.includes(dataItem.id)) {
      dataByDate[chartKey][dataItem.dt] = {
        ...dataByDate[chartKey][dataItem.dt],
        [dataItem.company]: dataItem[chartKey]
      };
    }
  });
};

export const getCompanyNames = (data: ChartItem[]) => {
  const tempSet = new Set<string>();

  data.forEach((item) => {
    Object.keys(item).forEach((key) => tempSet.add(key));
  });

  return Array.from(tempSet).filter((item) => item !== 'name');
};

const companyColors: Record<string, string> = {};

export const getCompanyColors = (data?: Data[]) => {
  if (Object.keys(companyColors).length === 0) {
    data?.forEach((item) => {
      companyColors[item.company] = randomcolor();
    }, {});
  }

  return companyColors;
};

export const sortDataByTime = (data: ChartItem[]) => {
  data.sort((a, b) => Date.parse(a.name) - Date.parse(b.name));
};
