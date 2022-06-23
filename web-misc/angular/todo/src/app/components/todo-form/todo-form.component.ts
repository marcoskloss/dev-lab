import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/services/persistence.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  form = new FormGroup({
    content: new FormControl('', Validators.required),
  });
  constructor(private todoService: TodoService) {}

  handleSubmit() {
    const contentControl = this.form.get('content');
    const { value } = contentControl;

    if (contentControl.errors?.required) {
      alert('Informe o conteúdo da Todo!');
      return;
    }

    this.todoService.emitAddNewTodo(value);
    this.form.get('content').setValue('');
  }
}
