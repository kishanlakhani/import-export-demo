import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
 
@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }

