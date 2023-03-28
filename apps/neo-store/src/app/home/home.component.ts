import { Component } from '@angular/core';
// import { Item } from '@neostore/features';
import { Item } from '@neostore/data-access';

@Component({
  selector: 'ns-core-ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Item[] = [
    {
      imageUrl: '../../assets/images/products/t-1.jpg',
      title: 'The Great Ramen off Kanagawa Active T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-2.jpg',
      title: 'The Bodacious Period Essential T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-3.jpg',
      title: 'Stay Positive Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-4.jpg',
      title: 'Not Fast, Not Furious Classic T-Shirt',
      price: 599,
      link: ''
    }
  ];
  
  goToProducts() {
    window.location.href = '/products';
  }
}
