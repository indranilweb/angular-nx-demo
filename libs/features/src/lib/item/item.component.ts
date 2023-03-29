import { Component, Input } from '@angular/core';
import { Item } from '@neostore/data-access';

@Component({
  selector: 'ns-core-ns-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: Item;
}

// export interface Item {
//   imageUrl: string,
//   title: string,
//   price: number,
//   link: string
// }
