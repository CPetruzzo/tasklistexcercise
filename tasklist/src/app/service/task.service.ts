import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs'; // la idea es que no se cuando va a ser modificado en la vida real, es asincrónico
import { Task } from 'src/app/Task'; 

const httpOptions = {
  headers: new HttpHeaders
  ({ 'Content-Type': 'application/json' 
})};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  toggleReminder(task:Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  addTask(task:Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}

//habiendo escuchado al controlador (el archivo ts) del task.component.ts entonces recibe la informacion y analiza que metodo usar
// el servicio actualiza el estado de la tarea en la base de datos, la logica se maneja en el componente
