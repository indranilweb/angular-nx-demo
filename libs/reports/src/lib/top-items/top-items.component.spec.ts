import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, PieChartComponent, UiModule } from '@neostore/ui';

import { TopItemsComponent } from './top-items.component';

describe('TopItemsComponent', () => {
  let component: TopItemsComponent;
  let fixture: ComponentFixture<TopItemsComponent>;
  const topItemsData = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [TopItemsComponent, ButtonComponent, PieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopItemsComponent);
    component = fixture.componentInstance;
    component.data = topItemsData.data;
    component.height = topItemsData.height;
    component.orientation = topItemsData.orientation;
    component.title = topItemsData.title;
    component.xAxisLabel = topItemsData.xAxisLabel;
    component.yAxisLabel = topItemsData.yAxisLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
