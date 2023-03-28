import { Component, Input } from '@angular/core';
import { ChartData } from '../models/chart-data.model';

@Component({
  selector: 'ns-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent {
  @Input() data: ChartData[] = [];
}
