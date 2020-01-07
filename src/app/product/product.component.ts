import { Component, OnInit } from '@angular/core';
import { NAMKEEN,Namkeen } from './Namkeen';
  import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  NamkeenList:Namkeen[]= NAMKEEN;
  constructor() { 
    console.log(NAMKEEN);
  }
  
  ngOnInit() {
  }

}
