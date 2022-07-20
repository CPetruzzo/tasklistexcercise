import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();

  title:string="";
  day:string="";
  reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.title.length===0){
      alert("Please add a Task");
      return;
    }

    const { title , day , reminder } = this;
    const newTask = { title , day, reminder };
    
    this.onAddTask.emit(newTask);
  
  }
}
