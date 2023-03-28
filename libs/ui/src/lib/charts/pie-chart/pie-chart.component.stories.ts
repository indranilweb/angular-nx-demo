import { Meta } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';

export default {
  title: 'PieChartComponent',
  component: PieChartComponent,
} as Meta<PieChartComponent>;

export const Primary = {
  render: (args: PieChartComponent) => ({
    props: args,
  }),
  args: {
    data: [],
  },
};
