import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; //para saber sobre que ruta estamos

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Mi Lista de tareas';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor(
    private uiService:UiService, 
    private router: Router
    ) 
    { 
    this.subscription=this.uiService.onToggle().subscribe(()=>{
      this.showAddTask=!this.showAddTask;
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {

    this.uiService.toggleAddTask();
    console.log(this.showAddTask);
  }

  hasRoute (route: string) {
    return this.router.url===route;
  }
}
