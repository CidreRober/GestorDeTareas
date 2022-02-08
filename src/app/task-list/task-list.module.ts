import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  imports: [BrowserModule,HttpClientModule,RouterModule, CommonModule, MatListModule, MatPaginatorModule],
  providers: [],
})
export class TaskListModule { }