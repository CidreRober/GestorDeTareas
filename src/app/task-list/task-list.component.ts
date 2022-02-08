import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public allTaskList: any = [];
  public taskList: any = [];
  public arrayTasks: any = [];
  private finalTaskArray: any = [];
  
  constructor(private taskService: TaskService) {
    this.getAllTasks();
   }

  ngOnInit(): void {
  }

 public getAllTasks(): void {
  this.taskService.getAllTasks().subscribe((tasks) => {
    this.allTaskList = tasks;
    this.taskList = tasks.slice(0 , 5);
  });
 }

 public onAreaListControlChanged(task: any, list: any){
   console.log(list._value); // lista de los activos
    let taskSend: TaskModel = new TaskModel();
    taskSend.id = task.id;
    taskSend.name = task.name;
    
    for (let i = 0; i < list._value.length; i++) {
      if (list._value[i] === task.name) {
        taskSend.isDone = true;
      } else {
        taskSend.isDone = false;
      }
    }
    this.saveTask(taskSend);
    }

  public saveTask(task: TaskModel) {
  this.taskService.updateTask(task.id, task).subscribe((task)=>{
    console.log(task);
  });
}

  public onChangePage(e: any): void {
  if (e.pageIndex === 0) {
    this.taskList = this.allTaskList.slice(0 , e.pageSize);
    } else if (e.pageIndex === 1) {
    this.taskList = this.allTaskList.slice(4 , 10);
    } else if (e.pageIndex === 2) {
      this.taskList = this.allTaskList.slice(9 , 14);
    } else if (e.pageIndex === 3) {
      this.taskList = this.allTaskList.slice(13 , 18);
    } else if (e.pageIndex === 4) {
      this.taskList = this.allTaskList.slice(18 , 23);
    }
  }

}

