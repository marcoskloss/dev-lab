import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  private todos: Todo[] = [];
  private STORAGE_KEY = '@todo:todos';

  constructor() {
    const initialTodos = window.localStorage.getItem(this.STORAGE_KEY);
    if (!initialTodos) return;

    const parsed = JSON.parse(initialTodos);
    console.log('getting todos from storage!');
    console.log(parsed);
    this.todos = parsed;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  save(toSaveTodos: Todo[]) {
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toSaveTodos));
    this.todos = toSaveTodos;
  }
}
