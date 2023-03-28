import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menu: HeaderMenu[] = [];
  @Input() styleClass: string = 'bg-black';

  goToHome() {
    window.location.href = '/';
  }
}

export interface HeaderMenu {
  label: string,
  link: string
}