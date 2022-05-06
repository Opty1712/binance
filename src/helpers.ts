import { Data } from './data';

export const getCompanyFilters = (data: Data[]) => {
  return data.map(({ company }) => ({
    text: company,
    value: company
  }));
};

type Filter = ReturnType<typeof getCompanyFilters>[number];

export const getCountryFilters = (data: Data[]) => {
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

export const getDataSource = (data: Data[]) =>
  data.map((item) => ({ ...item, key: item.id }));
