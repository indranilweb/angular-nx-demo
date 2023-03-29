import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent, ButtonComponent, UiModule } from '@neostore/ui';

import { RevenueComponent } from './revenue.component';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;
  const revenueData = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [RevenueComponent, ButtonComponent, BarChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RevenueComponent);
    component = fixture.componentInstance;
    component.data = revenueData.data;
    component.height = revenueData.height;
    component.orientation = revenueData.orientation;
    component.title = revenueData.title;
    component.xAxisLabel = revenueData.xAxisLabel;
    component.yAxisLabel = revenueData.yAxisLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
