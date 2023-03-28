import { Component, Input } from '@angular/core';
// import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ChartData } from '../models/chart-data.model';

@Component({
  selector: 'ns-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  _data: ChartData[] = [];
  _largest: number = 0;
  @Input() set data(d: ChartData[]) {
    this._data = d;
    d.forEach(e => {
      this._largest = (this._largest < e.value) ? (this._largest = e.value) : this._largest;
    });
  }
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() orientation: string = 'vertical';
  @Input() height: string = '300px';

  get data() {
    return this._data;
  }

  getCssPercentage(value: number) {
    return Math.round(value/this._largest*100);
  }

  // colorScheme: Color = {
  //   name: '',
  //   selectable: true,
  //   group: ScaleType.Linear,
  //   domain: ['#B2BEB5', '#7393B3', '#A9A9A9', '#6082B6', '#808080', '#899499', '#708090', '#848884']
  // };
}