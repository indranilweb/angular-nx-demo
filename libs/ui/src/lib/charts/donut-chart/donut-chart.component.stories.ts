import { Meta } from '@storybook/angular';
import { DonutChartComponent } from './donut-chart.component';

export default {
  title: 'DonutChartComponent',
  component: DonutChartComponent,
} as Meta<DonutChartComponent>;

export const Primary = {
  render: (args: DonutChartComponent) => ({
    props: args,
  }),
  args: {
    data: [],
  },
};
