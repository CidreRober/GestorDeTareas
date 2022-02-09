import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public itemMenuLabel: string = 'Crear una nueva tarea';
  public itemMenuLabel2: string = 'Visualizar las tareas creadas';
  ngOnInit(): void {
  }

}
