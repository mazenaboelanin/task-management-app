import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: any = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.initializeTasks();
  }

  initializeTasks(){
    this.taskService.getTasks().subscribe(
      (response) => {
        this.tasks = response
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  deleteTask(deletedTask){
    this.tasks = this.tasks.filter(task => task.id !== deletedTask.id);
  }

}
