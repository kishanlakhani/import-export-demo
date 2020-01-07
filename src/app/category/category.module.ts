import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule,
    ProductModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }





