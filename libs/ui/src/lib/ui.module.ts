import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    ButtonComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    PieChartComponent,
    BarChartComponent,
    DonutChartComponent,
  ],
})
export class UiModule {}
