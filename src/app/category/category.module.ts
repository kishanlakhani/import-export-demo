import { SharedModule } from '../shared/shared.module';  //common and browsermodule
import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';
import { FormsModule} from '@angular/forms'
@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule,
    ProductModule,
    FormsModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }





