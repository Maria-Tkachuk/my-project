import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/app.component';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less'],
})
export class TaskComponent implements OnInit{
@Input() item: any; 
@Input() tasks: any;
@Input() index: any;

ngOnInit() {
    console.log(this);
}

toggle(task: ITask) {
    task.complete = !task.complete;
}
remove(ind: number){
    this.tasks.splice(ind, 1);
}
}
 