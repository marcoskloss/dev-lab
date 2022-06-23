import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() data: Todo;
  removed = false;

  @Output() onChangeStatus = new EventEmitter<Todo>();
  @Output() onRemoveTodo = new EventEmitter<Todo>();

  constructor() {}

  handleChangeStatus(todo: Todo) {
    this.onChangeStatus.emit(todo);
  }

  handleRemoveTodo(todo: Todo) {
    this.removed = true;
    this.onRemoveTodo.emit(todo);
  }
}
