import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, PieChartComponent, UiModule } from '@neostore/ui';

import { TrafficComponent } from './traffic.component';

describe('TrafficComponent', () => {
  let component: TrafficComponent;
  let fixture: ComponentFixture<TrafficComponent>;
  const trafficData = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [TrafficComponent, ButtonComponent, PieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficComponent);
    component = fixture.componentInstance;
    component.data = trafficData.data;
    component.height = trafficData.height;
    component.title = trafficData.title;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
