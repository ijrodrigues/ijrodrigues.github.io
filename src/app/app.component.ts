import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "./todo.service";
import {Todo} from "./Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  form: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor( private service: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service
      .getAll()
      .subscribe(todo => this.todos = todo)
  }

  switchTodoStatus(todo: Todo){
    if (todo.id != null) {
      this.service
        .switchTodoStatus(todo.id)
        .subscribe({
          next:() => this.getAll()
        })
    }
  }

  delete(todo: Todo){
    if (todo.id != null) {
      this.service
        .delete(todo.id)
        .subscribe({
          next:() => this.getAll()
        })
    }
  }

  submit(){
    console.log(this.form.value)
    const todo: Todo = { ...this.form.value }

    this.service
      .create(todo)
      .subscribe(todo => {
        console.log(todo)
        this.todos.push(todo)
        this.form.reset()
      })
  }
}
