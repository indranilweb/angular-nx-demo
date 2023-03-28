import { Component, Input } from '@angular/core';
import { ChartData } from '@neostore/ui';

@Component({
  selector: 'ns-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss'],
})
export class RevenueComponent {
  @Input() data: ChartData[] = [];
  @Input() title: string = '';
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() orientation: string = '';
  @Input() height: string = '';
}
