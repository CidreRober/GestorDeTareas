import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task.component';


@NgModule({
  declarations: [NewTaskComponent],
  exports: [NewTaskComponent],
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule, BrowserModule],
  providers: [],
})
export class NewTaskModule { }
