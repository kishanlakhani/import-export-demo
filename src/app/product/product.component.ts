import { Component, OnInit  ,SimpleChanges, Input,OnDestroy} from '@angular/core';
import { NAMKEEN,INamkeen } from './Namkeen';
  import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnDestroy{
  NamkeenList:INamkeen[];
  @Input() newPriceSend:number=0; 
  @Input() selectIndex:number=0;
  namekeenList:INamkeen[];
  namkeenName:string[];
  construtor() { 
    
  }

  selectIndexX:number=0;
  ngOnInit() {
    this.NamkeenList = NAMKEEN;
    console.log("product ngonit call")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges product call")
    console.log(this.selectIndex);
    console.log(this.newPriceSend);
    this.namekeenList = NAMKEEN;
    // this.namkeenName = this.namekeenList.map(namkeen => namkeen.namkeenName);
    // console.log(this.namekeenList[this.selectIndexX].price);
    this.NamkeenList[this.selectIndex-1].price = this.newPriceSend;

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