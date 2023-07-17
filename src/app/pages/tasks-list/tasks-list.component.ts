import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: any = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        id:1,
        title: 'task1',
        priority: 1,
        date: new Date().toLocaleString(),
        state: 'inprogress',
        description: 'descipriton of task1'
      },
      {
        id:2,
        title: 'task2',
        priority: 2,
        date: new Date().toLocaleString(),
        state: 'Todo',
        description: 'descipriton of task2'
      },
      {
        id:3,
        title: 'task3',
        priority: 3,
        date: new Date().toLocaleString(),
        state: 'Todo',
        description: 'descipriton of task3'
      }
    ];
  }

}
