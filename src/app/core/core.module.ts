import {SharedModule} from '../shared/shared.module'   //commona and browsermodule
import { NgModule } from '@angular/core';

import {CoreComponent} from './core.component';

@NgModule({
  declarations: [CoreComponent ],
  imports: [
    SharedModule
  ],
  exports:[
  CoreComponent
  ]
})
export class CoreModule { }
