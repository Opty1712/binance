import { Data } from './data';

type Filter = {
  text: string;
  value: string;
};

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

export type SelectedCompanies = Array<Array<Data>>;

export const getSelectedData = (data: Data[], selectedIds: string[]) => {
  return selectedIds.reduce<SelectedCompanies>((accumulator, current) => {
    const filteredCompany = data.filter((item) => item.id === current);
    accumulator.push(filteredCompany);

    return accumulator;
  }, []);
};
