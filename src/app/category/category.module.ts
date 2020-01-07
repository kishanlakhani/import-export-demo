// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NgModule , CommonModule } from '../shared/shared'
import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
