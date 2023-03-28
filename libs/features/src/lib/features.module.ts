import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { UiModule } from '@neostore/ui';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [ItemComponent],
  exports: [ItemComponent],
})
export class FeaturesModule {}
