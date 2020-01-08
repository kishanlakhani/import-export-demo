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
  @Input() priceChangeX:number=0; 
  @Input() selectIndexX:number=0;
  construtor() { 
    console.log(NAMKEEN);
  }
  
  ngOnInit() {
    this.NamkeenList = NAMKEEN;
    console.log("product ngonit call")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges product call")
    // console.log(this.NamkeenList[this.selectIndexX-1].price)
    this.NamkeenList[this.selectIndexX-1]["price"] = changes.priceChangeX.currentValue;
    // console.log(this.NamkeenList[this.selectIndexX-1].price)

    // this.NamkeenList[]
    // console.log(changes.priceChange.previousValue)
    // console.log(changes.priceChange.currentValue)
    // this.NamkeenList.map(namkeen => {
    //   // console.log(namkeen.id);
    //    return namkeen.price=changes.priceChange.currentValue;
    // })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("product destroy call");
  }

}
