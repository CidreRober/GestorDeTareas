import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { NewTaskModule } from './new-task/new-task.module';
import { TaskListModule } from './task-list/task-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    HeaderModule,
    TaskListModule,
    NewTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
