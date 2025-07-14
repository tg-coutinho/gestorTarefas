import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  imports: [FormsModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css'
})
export class TaskFilter {

   filter: string = '';

  @Output() taskFilter = new EventEmitter<string>();
  

  filterTasks() {
    this.taskFilter.emit(this.filter);
  }


}
