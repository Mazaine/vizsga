import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  // A teendők tömbje, ahol minden elem szöveget és státuszt tartalmaz
  todos: { text: string; completed: boolean }[] = [];

  // Az új teendő szövege (kötve az input mezőhöz)
  newTodoText: string = '';

  // Teendő hozzáadása
  addTodo(): void {
    if (this.newTodoText.trim() !== '') {
      this.todos.push({
        text: this.newTodoText.trim(),
        completed: false
      });
      this.newTodoText = ''; // mező kiürítése
    }
  }

  // Teendő eltávolítása
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  // Teendő állapotának kapcsolása
  toggleCompleted(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
