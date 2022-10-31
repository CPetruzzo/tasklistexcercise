import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  //esto le va a pasar al componente padre el task que se va a eliminar

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}

// CONTINUACION DEL TASK-ITEM.COMPONENT.HTML
// lo mismo que pasa con el onDelete pasa con el onToggle, 
// emiten un evento y le avisan a el componente padre para que el vea que le toca hacer.
// Sigue en el task.component.html