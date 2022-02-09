import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    public taskList: TaskModel[] = [];
    public name: string = '';
    public createTaskLabel = 'Crear tarea';
    public saveLabel = 'Guardar';

    constructor(private taskService: TaskService, private toastrService: ToastrService) {}

    ngOnInit(): void {
      this.getAllTasks();
    }
    
    // Show sucessfull alert
    private showSuccess() {
      this.toastrService.success('Tarea creada correctamente', 'Crear tarea');
    }

    // Function that create a new Task
    public createTask() {
      let lastId: number = 0;
      let task: TaskModel = new TaskModel();
      if (this.taskList.length === 0) {
        task.id = 1;
      } else {
        lastId = this.taskList[this.taskList.length - 1].id
        task.id = lastId + 1;
      }
      
      task.name = this.name;
      task.isDone = false;
      if (this.name !== '') {
        this.taskService.createTask(task).subscribe((task) => {
          this.name = '';
        });
        this.showSuccess();
      }
    }

    // Function that get All Tasks
    public getAllTasks(): void {
      this.taskService.getAllTasks().subscribe((tasks) => {
        this.taskList = tasks;
      });
  }
  
}

