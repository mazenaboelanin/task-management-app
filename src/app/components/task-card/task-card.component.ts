import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTaskEvent: EventEmitter <any> = new EventEmitter();
  @Output() onSelectTaskEvent: EventEmitter <any> = new EventEmitter();
  selectedTasks = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  taskSelected(checked: boolean){
    this.onSelectTaskEvent.emit(this.task);
  }

  deleteTask(){
    this.taskService.deleteTask(this.task?.id).subscribe(
      (response) => {
        this.onDeleteTaskEvent.emit(this.task);
      },
      (error) => {
        console.log(error)
      }
    );
  }

  updateTaskState(){
    if(this.task?.state === 'inprogress'){
      this.task.state = 'done'
    } else {
      this.task.state = 'inprogress'
    }
    this.taskService.updateTask(this.task).subscribe(
      (response) => {},
      (error) => {
        console.log(error)
      }
    );
  }

  redirectToTaskDetails(){
    const navigationExtras: NavigationExtras = {
      state: { task: this.task },
    };
    this.router.navigate(['task-details'], navigationExtras);
  }
}
