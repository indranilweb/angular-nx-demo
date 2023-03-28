import { Component, Input } from '@angular/core';
import { ChartData } from '@neostore/ui';

@Component({
  selector: 'ns-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.scss'],
})
export class TopItemsComponent {
  @Input() data: ChartData[] = [];
  @Input() title: string = '';
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() orientation: string = '';
  @Input() height: string = '';
}
