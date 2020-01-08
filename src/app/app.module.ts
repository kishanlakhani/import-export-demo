import { NgModule } from '@angular/core'
import { SharedModule } from './shared/shared.module'; //common and browsermodule
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { CoreComponent } from './core/core.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
  ],
  imports: [
    SharedModule,
    CategoryModule,
    FormsModule        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


