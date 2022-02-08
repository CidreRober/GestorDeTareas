import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [MatMenuModule,RouterModule],
  providers: [],
})
export class MenuModule { }
