import { Component, Input } from '@angular/core';
import { ChartData } from '@neostore/ui';

@Component({
  selector: 'ns-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
})
export class TrafficComponent {
  @Input() data: ChartData[] = [];
  @Input() title: string = '';
  @Input() height: string = '';
}
