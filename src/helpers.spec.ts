import { data } from './data';
import { getCompanyFilters, getCountryFilters, getDataSource } from './helpers';

describe(nameof(getCompanyFilters), () => {
  it('returns filters', () => {
    expect(getCompanyFilters(data)).toEqual([
      {
        text: 'ToTheMoon',
        value: 'ToTheMoon'
      },
      {
        text: 'MyCoin',
        value: 'MyCoin'
      },
      {
        text: 'OverTheHills',
        value: 'OverTheHills'
      },
      {
        text: 'InTheDark',
        value: 'InTheDark'
      },
      {
        text: 'BetterFuture',
        value: 'BetterFuture'
      }
    ]);
  });

  it('returns empty array', () => {
    expect(getCompanyFilters([])).toEqual([]);
  });
});

describe(nameof(getCountryFilters), () => {
  it('returns filters', () => {
    expect(getCountryFilters(data)).toEqual([
      {
        text: 'SG',
        value: 'SG'
      },
      {
        text: 'UK',
        value: 'UK'
      },
      {
        text: 'US',
        value: 'US'
      }
    ]);
  });
});

it('returns empty array', () => {
  expect(getCountryFilters([])).toEqual([]);
});

describe(nameof(getDataSource), () => {
  it('returns data with «key»', () => {
    const result = getDataSource(data);

    for (const item of result) {
      expect(item.key).toBe(item.id);
    }
  });

  it('returns empty array', () => {
    expect(getDataSource([])).toEqual([]);
  });
});
