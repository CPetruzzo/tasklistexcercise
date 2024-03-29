import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] =[] ;
  constructor(private taskService: TaskService) {}
   
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id); // elimina el task del array de tasks
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }

  addTask (task: Task) {
    this.taskService.addTask(task).subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }

}

//la logica se maneja en el componente
// aca lo que se da como orden se suscribe en el servicio, es decir, 
// aca llamamos al servicio y le damos la orden de que nos suscriba a la funcion getTasks, deleteTask, addTask, toggleReminder
// SIGUE EN EL ARCHIVO task.service.ts