import { Component } from '@angular/core';
import { HeaderMenu } from '@neostore/ui';

@Component({
  selector: 'ns-core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'neo-store';
  menu: HeaderMenu[] = [
    {
      label: 'HOME',
      link: '/home'
    },
    {
      label: 'SHOP',
      link: '/products'
    },
    {
      label: 'ABOUT',
      link: '/#'
    },
    {
      label: 'CONTACT',
      link: '/#'
    }
  ];
}
