import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private newTodoSubject = new Subject<string>();

  constructor() {}

  updateStatus(todo: Todo): boolean {
    return !todo.done;
  }

  remove(todoList: Todo[], toRemoveTodo: Todo) {
    return todoList.filter((t) => t.id !== toRemoveTodo.id);
  }

  addTodo(todoList: Todo[], newTodo: Todo) {
    return [...todoList, newTodo];
  }

  emitAddNewTodo(todoContent: string) {
    this.newTodoSubject.next(todoContent);
  }

  watchAddNewTodo(): Observable<string> {
    return this.newTodoSubject.asObservable();
  }
}
