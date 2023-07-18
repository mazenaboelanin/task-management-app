import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() tasks: any;
  selectedTasks = [];

  constructor() { }

  ngOnInit(): void {
  }

  taskSelected(checked: boolean, task: any){
    if(checked) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks = this.selectedTasks.filter(selectedTask => selectedTask.id !== task.id);
    }
  }
}
