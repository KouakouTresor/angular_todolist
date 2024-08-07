import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist';

  private _todos: Todo[] = [
    { id: 1, content: 'Learn Angular', done: false, createdAt: new Date() },
    { id: 2, content: 'Eat better', done: true, createdAt: new Date() },
    {
      id: 3,
      content: 'Drink a lot of water',
      done: false,
      createdAt: new Date(),
    },
    { id: 4, content: 'Sleep more', done: true, createdAt: new Date() },
  ];

  get todos() {
    return this._todos;
  }

  handleClick() {
    //console.log('Clicked');
  }

  onSubmit($event: SubmitEvent, arg1: string) {
    $event.preventDefault();
    this.todos.push({
      id: this.todos.length + 1,
      content: arg1,
      done: false,
      createdAt: new Date(),
    });
  }

  toggleChange(todo: Todo) {
    todo.done = !todo.done;
  }

  handleDelete(arg0: number) {
    this._todos =  this.todos.filter((todo) => todo.id != arg0);
  }
}
