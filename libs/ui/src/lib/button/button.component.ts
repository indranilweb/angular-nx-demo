import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() text: string = 'CLICK ME';
  @Input() type: string = 'primary';
  @Input() icon: string = '';
  @Input() styleClass: string = '';

  @Output() click = new EventEmitter();

  clickEvent(e: Event) {
    this.click.emit(e);
  }
}
