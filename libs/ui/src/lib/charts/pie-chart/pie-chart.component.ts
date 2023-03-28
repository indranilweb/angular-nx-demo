import { Component, Input } from '@angular/core';
import { ChartData } from '../models/chart-data.model';

@Component({
  selector: 'ns-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  _data: ChartData[] = [];
  _total: number = 0;
  dataFormat: any = [];
  colors: string[] = ['#6082B6', '#808080', '#899499', '#B2BEB5', '#A9A9A9', '#7393B3', '#708090', '#848884'];

  @Input() height: string = '300px';
  @Input() set data(d: ChartData[]) {
    this._data = d;
    d.forEach(e => {
      // this._largest = (this._largest < e.value) ? (this._largest = e.value) : this._largest;
      this._total += e.value;
    });
    let degStart: number = 0;
    let degStop: number = 0;
    d.forEach((e, i)=> {
      let percentage = (e.value*360/this._total);
      degStop = degStart + percentage;
      this.dataFormat.push({
        name: e.name,
        value: e.value,
        percentage: percentage,
        degStart: degStart,
        degStop: degStop,
        color: this.colors[((i + 1)%this.colors.length - 1)]
      });
      degStart = degStop;
    });
  }
  get data() {
    return this._data;
  }

  getGradient(data: any): string {
    // return `background: conic-gradient(transparent 0deg ${data.degStart}deg, ${data.color} ${data.degStart}deg ${data.degStop}deg, transparent ${data.degStop}deg 360deg);`
    return `conic-gradient(transparent 0deg ${data.degStart}deg, ${data.color} ${data.degStart}deg ${data.degStop}deg, transparent ${data.degStop}deg 360deg)`;
  }

  getTextRotation(data: any): string {
    return `rotate(${90+(data.degStart+(data.degStop-data.degStart)/2)}deg)`;
  }

  getFlip(data: any): string {
    let deg = (data.degStart+(data.degStop-data.degStart)/2);
    if(deg >= 0 && deg <= 180) {
      return `scale(-1)`;
    } else {
      return `scale(1)`;
    }
  }
}
