import { Meta } from '@storybook/angular';
import { BarChartComponent } from './bar-chart.component';

export default {
  title: 'BarChartComponent',
  component: BarChartComponent,
} as Meta<BarChartComponent>;

export const Primary = {
  render: (args: BarChartComponent) => ({
    props: args,
  }),
  args: {
    data: [],
    xAxisLabel: '',
    yAxisLabel: '',
    orientation: 'vertical',
    height: '300px'
  },
};
