import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { PersistenceService } from 'src/app/services/persistence.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnDestroy, OnInit {
  todoList: Todo[] = [];
  private todoSubscription: Subscription;

  constructor(
    private todoService: TodoService,
    private persistenceService: PersistenceService
  ) {
    this.todoSubscription = this.todoService
      .watchAddNewTodo()
      .subscribe(this.handleAddNewTodo.bind(this));
  }

  ngOnInit(): void {
    this.todoList = this.persistenceService.getTodos();
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
    this.persistenceService.save(this.todoList);
  }

  handleChangeStatus(todo: Todo) {
    const newStatus = this.todoService.updateStatus(todo);
    todo.done = newStatus;
    this.persistenceService.save(this.todoList);
  }

  handleRemoveTodo(todo: Todo) {
    const newList = this.todoService.remove(this.todoList, todo);
    setTimeout(() => {
      this.todoList = newList;
      this.persistenceService.save(this.todoList);
    }, 300); // wait until animation ends
  }
}
