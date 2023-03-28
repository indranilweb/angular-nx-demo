import { Component } from '@angular/core';
import { Item } from '@neostore/data-access';
// import { Item } from '@neostore/features';

@Component({
  selector: 'ns-core-ns-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
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
    },
    {
      imageUrl: '../../assets/images/products/t-5.jpg',
      title: 'Space Travel Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-6.jpg',
      title: 'Don\'t Talk To Strangers Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-7.jpg',
      title: 'Street Cats Essential T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-8.jpg',
      title: '80\'s Escher Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-9.jpg',
      title: 'Ghost Of Disapproval Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-10.jpg',
      title: 'Science! Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-11.jpg',
      title: 'Make a Smile Classic T-Shirt',
      price: 599,
      link: ''
    },
    {
      imageUrl: '../../assets/images/products/t-12.jpg',
      title: 'Music Man Classic T-Shirt',
      price: 599,
      link: ''
    }
  ];
}
