import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    public taskList: any;
    public name: string = '';

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
      this.getAllTasks();
    }
    
    public createTask() {
      let lastId: number = this.taskList[this.taskList.length - 1].id;
      let task: TaskModel = new TaskModel();
      task.id = lastId + 1;
      task.name = this.name;
      task.isDone = false;
      this.taskService.createTask(task).subscribe((task) => {
        this.name = '';
      });
    }

    public getAllTasks(): void {
      this.taskService.getAllTasks().subscribe((tasks) => {
        this.taskList = tasks;
      });
  }
  
}

