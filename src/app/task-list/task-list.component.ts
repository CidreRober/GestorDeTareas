import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskList: any = [];
  public totalElements: number = 0;
  public title = 'Listado de tareas';
  public nameLabel = 'Nombre tarea';
  public isDoneLabel = 'Realizada';
  public noTasks = 'No existe ninguna tarea.';
  
  constructor(private taskService: TaskService, private toastrService: ToastrService) {
   }

  ngOnInit(): void {
    this.requestTasksByPage(0);
  }

  // Show sucessfull alert
  private showSuccess() {
    this.toastrService.success('Tarea modificada correctamente', 'Modificar tarea');
  }

  // Function that get tasks by page number
  public requestTasksByPage(page: number): void {
    this.taskList = [];
    this.taskService.getTaskByPage(page).subscribe((tasks) => {
      this.taskList = tasks.content;
      this.totalElements = tasks.totalElements;
    });
  }

  // Function that modifies the isDone state
 public onTaskChanged(task: TaskModel){
    let taskSend: TaskModel = new TaskModel();
    taskSend.id = task.id;
    taskSend.name = task.name;

    if (task.isDone === true) {
      taskSend.isDone = false;
    } else {
      taskSend.isDone = true;
    }

    this.saveTask(taskSend);
    }

    // Function that updates a task
  public saveTask(task: TaskModel) {
  this.taskService.updateTask(task.id, task).subscribe((task)=>{
    console.log(task);
  });
  this.showSuccess()
}

  // Function that call the requestTasksByPage when page changes
  public onChangePage(e: any): void {
    this.requestTasksByPage(e.pageIndex);
}

}
