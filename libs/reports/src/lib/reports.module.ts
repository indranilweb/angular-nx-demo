import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@neostore/ui';
import { SalesComponent } from './sales/sales.component';
import { TrafficComponent } from './traffic/traffic.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TopItemsComponent } from './top-items/top-items.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [
    SalesComponent,
    TrafficComponent,
    RevenueComponent,
    TopItemsComponent,
  ],
  exports: [
    SalesComponent,
    TrafficComponent,
    RevenueComponent,
    TopItemsComponent,
  ],
})
export class ReportsModule {}
