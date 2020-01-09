import { Component, OnInit  ,SimpleChanges, Input,OnDestroy} from '@angular/core';
import { NAMKEEN,INamkeen } from './Namkeen';
  import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnDestroy{
  namkeenList:INamkeen[];
  @Input() newPriceSend?:number=0; 
  @Input() selectIndex?:number=0;
  // namkeenList1:INamkeen[];
  namkeenName:string[];
  construtor() { 
    
  }

  selectIndexX:number=0;
  ngOnInit() {
    this.namkeenList = NAMKEEN;
    console.log("product ngonit call")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges product call")
    console.log("selected Index : ", this.selectIndex);
    console.log("new Price Index : ",this.newPriceSend);
    console.log(this.namkeenList)
    this.namkeenList = NAMKEEN;
    console.log('changes :: ',changes);
    // console.log('this.namekeenList :: ', this.namkeenList1);
    // this.namkeenName = this.namekeenList.map(namkeen => namkeen.namkeenName);
    // console.log(this.namekeenList[this.selectIndexX].price);
    this.namkeenList[this.selectIndex-1].price = this.newPriceSend;

  }
  ngOnDestroy(): void {
    console.log("product destroy call");
  }

}


















    // console.log(this.NamkeenList[this.selectIndexX-1].price)

    // this.NamkeenList[]
    // console.log(changes.priceChange.previousValue)
    // console.log(changes.priceChange.currentValue)
    // this.NamkeenList.map(namkeen => {
    //   // console.log(namkeen.id);
    //    return namkeen.price=changes.priceChange.currentValue;
    // })