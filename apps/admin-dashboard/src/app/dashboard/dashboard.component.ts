import { Component } from '@angular/core';
import { Sales } from '@neostore/data-access';

@Component({
  selector: 'ns-core-ad-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  salesData: Sales = {
    title: 'Monthly Sales',
    xAxisLabel: 'Months',
    yAxisLabel: 'Sales',
    orientation: 'vertical',
    height: '250px',
    data: [
      { name: "January", value: 105000 },
      { name: "February", value: 75000 },
      { name: "March", value: 35000 },
      { name: "April", value: 50000 },
      { name: "May", value: 120000 },
      { name: "June", value: 45000 },
      { name: "July", value: 55000 },
      { name: "August", value: 75000 },
      { name: "September", value: 100000 },
      { name: "October", value: 140000 },
      { name: "November", value: 80000 },
      { name: "December", value: 120000 }
    ]
  };

  trafficData = {
    title: 'Traffic Source',
    height: '400px',
    data: [
      { name: "Direct", value: 155000 },
      { name: "Email", value: 75000 },
      { name: "Website", value: 35000 },
      { name: "Social", value: 120000 },
      { name: "Others", value: 50000 }
    ]
  };

  revenueData = {
    title: 'Revenue',
    xAxisLabel: 'Item',
    yAxisLabel: 'Sales',
    orientation: 'horizontal',
    height: '400px',
    data: [
      { name: "Direct Sales", value: 155000 },
      { name: "Email Marketing", value: 75000 },
      { name: "Affiliate Marketing", value: 35000 },
      { name: "E-commerce", value: 120000 },
      { name: "Store Sales", value: 65000 }
    ]
  };

  topItemsData = {
    title: 'Top Items',
    xAxisLabel: 'Item',
    yAxisLabel: 'Sales',
    orientation: 'horizontal',
    height: '400px',
    data: [
      { name: "T-Shirts", value: 85000 },
      { name: "Jeans", value: 75000 },
      { name: "Hoodies", value: 35000 },
      { name: "Tops", value: 45000 },
      { name: "Accessories", value: 20000 }
    ]
  };
}
