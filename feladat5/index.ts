import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoText: string = '';

  // Új teendő hozzáadása
  addTodo(): void {
    const trimmedText = this.newTodoText.trim();
    if (trimmedText) {
      this.todos.push({ text: trimmedText, completed: false });
      this.newTodoText = '';
    }
  }

  // Teendő eltávolítása
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  // Kész állapot váltása
  toggleCompleted(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
