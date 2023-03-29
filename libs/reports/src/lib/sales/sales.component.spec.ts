import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent, ButtonComponent, UiModule } from '@neostore/ui';

import { SalesComponent } from './sales.component';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;
  const salesData = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [SalesComponent, ButtonComponent, BarChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    component.data = salesData.data;
    component.height = salesData.height;
    component.orientation = salesData.orientation;
    component.title = salesData.title;
    component.xAxisLabel = salesData.xAxisLabel;
    component.yAxisLabel = salesData.yAxisLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
