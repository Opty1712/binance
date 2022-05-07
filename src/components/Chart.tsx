import { memo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Typography } from 'antd';
import { styled } from 'linaria/react';
import { chartNames } from '../constants';
import { getCompanyNames, getCompanyColors } from '../helpers';
import { ChartItem, ChartKey } from '../types';

type ChartProps = { chartKey: ChartKey; data: ChartItem[] };

export const Chart = memo<ChartProps>(({ chartKey, data }) => {
  const colors = getCompanyColors();

  return (
    <Wrapper>
      <b>
        <Typography.Text type="success">{chartNames[chartKey]}</Typography.Text>
      </b>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {getCompanyNames(data).map((company) => (
            <Line
              type="monotone"
              dataKey={company}
              stroke={colors[company]}
              key={company}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
});
Chart.displayName = nameof(Chart);

const Wrapper = styled.div`
  height: 300px;
  margin: 40px 0 0 0;
`;
