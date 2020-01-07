import { NgModule } from '@angular/core'
import { SharedModule } from './shared/shared.module'; //common and browsermodule
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CategoryModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


