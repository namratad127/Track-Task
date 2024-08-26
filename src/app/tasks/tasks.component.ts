import { Component ,Input} from '@angular/core';
import { TasksService } from './tasks.service';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  isAddingTask = false;
 

  constructor(private tasksService:TasksService) {}


  get selectedUserTasks() {
    return this.tasksService.getUSerTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
