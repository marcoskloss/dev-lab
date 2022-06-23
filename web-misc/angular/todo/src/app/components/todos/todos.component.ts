import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnDestroy {
  todoList: Todo[] = [];
  private todoSubscription: Subscription;

  constructor(private todoService: TodoService) {
    this.todoSubscription = this.todoService
      .watchAddNewTodo()
      .subscribe(this.handleAddNewTodo.bind(this));
  }

  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

  handleAddNewTodo(todoContent: string) {
    const newTodo: Todo = {
      id: new Date().getTime(),
      content: todoContent,
      done: false,
    };
    this.todoList = this.todoService.addTodo(this.todoList, newTodo);
  }

  handleChangeStatus(todo: Todo) {
    const newStatus = this.todoService.updateStatus(todo);
    todo.done = newStatus;
  }

  handleRemoveTodo(todo: Todo) {
    const newList = this.todoService.remove(this.todoList, todo);
    setTimeout(() => {
      this.todoList = newList;
    }, 300); // wait until animation ends
  }
}
