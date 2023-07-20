import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: any = [];
  selectedTasks = [];

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

  tasksSelected(task){
    if(task?.checked) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks = this.selectedTasks.filter(selectedTask => selectedTask.id !== task.id);
    }
  }

  doneSelectedTasks(){
    this.selectedTasks.forEach(selectedTask => {
      // avoid useless api update request
      if(selectedTask.state === 'done') {
        // clear checkbox and remove from selected task
        selectedTask.checked = false;
        this.selectedTasks = this.selectedTasks.filter(task => task.id !== selectedTask.id);
        return;
      }
      delete selectedTask['checked'];
      selectedTask.state ='done'
      // ofcourse we could send tasks as array of object if we handled this from backend
      this.taskService.updateTask(selectedTask).subscribe(
        (response) => {
          // removing only the success updated task
          this.selectedTasks = this.selectedTasks.filter(task => task.id !== selectedTask.id);
        },
        (error) => {
          console.log(error)
        }
      );
    });
  }

  deleteSelectedTasks(){
    this.selectedTasks.forEach(selectedTask => {
      this.taskService.deleteTask(selectedTask.id).subscribe(
        (response) => {
          // delete task from ui
          this.deleteTask(selectedTask);
          // delete task from selectedTasks
          this.selectedTasks = this.selectedTasks.filter(task => task.id !== selectedTask.id);
        },
        (error) => {
          console.log(error)
        }
      );
    });
  }

}
