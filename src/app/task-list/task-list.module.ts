import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginator } from './CustomPaginatorConfiguration';
import { MatPaginatorIntl } from '@angular/material/paginator';


@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  imports: [BrowserModule,HttpClientModule,RouterModule, CommonModule, MatListModule, MatPaginatorModule],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    HttpClientModule,
  ]
})
export class TaskListModule { }