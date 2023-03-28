import { Component, Input } from '@angular/core';
import { ChartData } from '@neostore/ui';

@Component({
  selector: 'ns-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  @Input() data: ChartData[] = [];
  @Input() title: string = '';
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() orientation: string = '';
  @Input() height: string = '';
}
