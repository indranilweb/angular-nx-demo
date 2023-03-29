import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, UiModule } from '@neostore/ui';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [ItemComponent, ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = {
      imageUrl: '../../assets/images/products/t-4.jpg',
      title: 'Not Fast, Not Furious Classic T-Shirt',
      price: 599,
      link: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
