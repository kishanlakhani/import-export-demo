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
  namekeenList:INamkeen[];
  // for drop down store only name use NamkeenName 
  namkeenName:string[];

  // isShowPriceInput for when drop down select then after show input box
  isShowPriceInput:boolean;
  //isHideProduct for product component show and hide 
  isHideProduct:boolean
  // selectValue for store select dorp down value
  selectValue:string;
  // selectIndex index of selectValue in NAMKEEN
  selectIndex:number;
  newPriceSend :number; 
  showPriceInput:string="";
  i:number;
  constructor() { }
 
  ngOnInit() {
    console.log("category ngOnIt call")
    this.newPrice=0;
    this.namekeenList= NAMKEEN;
    this.namkeenName = this.namekeenList.map(namkeen=>{
      return namkeen.namkeenName;
    });
    this.isShowPriceInput=false;
    this.isHideProduct=true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log("category componet ngOnChanege call " +changes.isCategoryShow.previousValue + " to " + changes.isCategoryShow.currentValue );
    
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
  getSelectValue(event){
    this.selectIndex = event.srcElement.options.selectedIndex;
    this.i=this.selectIndex;
    // this.selectIndex= event.srcElementoptions.selectedIndex;
    // console.log(this.selectIndex);
    this.newPriceSend= this.namekeenList[this.selectIndex-1].price;
    this.showPriceInput = String(this.newPriceSend);
    this.isShowPriceInput = true;

  }

  newPriceGet(event){
    this.i=this.selectIndex;
    // this.selectIndex= event.srcElementoptions.selectedIndex;
    // console.log(this.selectIndex);
    this.selectIndex=this.i;
    this.newPriceSend= this.namekeenList[this.selectIndex-1].price;
    this.showPriceInput = String(this.newPriceSend);
    this.newPriceSend = Number((<HTMLInputElement>event.target).value);
    this.showPriceInput = String(this.newPriceSend);
    this.isShowPriceInput = true;

  }
 
  

}








//  console.log(event);
//     this.selectValue = (<HTMLInputElement>event.target).value;
//     // console.log(event.srcElementoptions.selectedIndex)
//     // console.log(this.namekeenList[this.namkeenName.indexOf(this.selectValue)-1].price)
//     console.log(this.namekeenList[this.namkeenName.indexOf(this.selectValue)])
//     this.selectIndex = event.srcElement.options.selectedIndex;
//     console.log("select index" + typeof this.selectIndex + this.selectIndex)
//     this.newPriceSend = this.namekeenList[(this.selectIndex)].price;
//     console.log(this.selectValue +   " " + this.newPriceSend)
//     this.showPriceInput = String(this.newPriceSend);
//     this.isShowPriceInput = true;