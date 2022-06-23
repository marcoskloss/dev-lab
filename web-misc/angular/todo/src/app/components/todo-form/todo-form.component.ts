import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  form = new FormGroup({
    content: new FormControl(''),
  });
  constructor(private todoService: TodoService) {}

  handleSubmit() {
    const { value } = this.form.get('content');
    if (!value) {
      alert('Valor obrigatorio');
      // https://angular.io/api/forms/Validators
      return;
    }
    this.todoService.emitAddNewTodo(value);
    this.form.get('content').setValue('');
  }
}
