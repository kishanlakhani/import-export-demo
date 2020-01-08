import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import {INamkeen , NAMKEEN } from '../product/Namkeen';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() isCategoryShow:boolean=false;
  // newPrice come from input box for change partucular product price and two way databinding
  newPrice:number;
  // all NAMKEEN data store in NamkeenList
  NamekeenList:INamkeen[];
  // for drop down store only name use NamkeenName 
  NamkeenName:string[];

  name:string;
  // isShowPriceInput for when drop down select then after show input box
  isShowPriceInput:boolean;
  //isHideProduct for product component show and hide 
  isHideProduct:boolean
  // selectValue for store select dorp down value
  selectValue:string;
  // selectIndex index of selectValue in NAMKEEN
  selectIndex:number;
  
  constructor() { }
 
  ngOnInit() {
    console.log("category ngOnIt call")
    this.newPrice=0;
    this.NamekeenList = NAMKEEN;
    this.NamkeenName = this.NamekeenList.map(namkeen=>{
      return namkeen.namkeenName;
    });
    this.name='';
    this.isShowPriceInput=false;
    this.isHideProduct=true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("category componet ngOnChanege call " +changes.isCategoryShow.previousValue + " to " + changes.isCategoryShow.currentValue );
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("category destroy call")
  }

  // when hide product list button click hideProduct run
  hideProduct(){
    console.log(this.isHideProduct)
    this.isHideProduct = !this.isHideProduct; // false to true or true to false toggel
    this.isShowPriceInput = false;

  }

  // input box price value get when drop down value select
  getPrice(){
    console.log(this.name)

    this.selectValue = (<HTMLInputElement>document.getElementById('namkeenName')).value;
    let s = NAMKEEN[this.NamkeenName.indexOf(this.selectValue)].idNo;
    this.selectIndex = s;
    console.log(this.selectIndex)    
    let p  = NAMKEEN[this.NamkeenName.indexOf(this.selectValue)].price;
    this.newPrice = Number(p);
    this.isShowPriceInput = true;
  }


  
 a(){
   console.log("kkk")
 }
  

}
