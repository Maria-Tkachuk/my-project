import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
export  interface ITask {
  title: string;
  complete: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent{
  title: string = 'My to-do list';
  tasks: ITask[] = [
    {
      title: 'молоко', 
      complete: false
    },
    {
      title: 'хліб', 
      complete: true
    },
    {
      title: 'молоток', 
      complete: false
    }
  ];

  add(title:string) {
    this.tasks.push({
        title,
        complete: false
    });
}

}
