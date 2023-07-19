import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTaskEvent: EventEmitter <any> = new EventEmitter();
  selectedTasks = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  taskSelected(checked: boolean, task: any){
    if(checked) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks = this.selectedTasks.filter(selectedTask => selectedTask.id !== task.id);
    }
  }

  deleteTask(){
    console.log(this.task);
    this.taskService.deleteTask(this.task?.id).subscribe(
      (response) => {
        this.onDeleteTaskEvent.emit(this.task);
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
