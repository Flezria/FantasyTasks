import { Observable } from 'rxjs/Observable';
import { TodoitemService } from './../services/todoitem.service';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoItem } from './../models/todoitem.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: TodoItem;
  todoList: Observable<TodoItem[]>;

  categories = ["Strength", "Intellect", "Stamina"];
  rewards = ["1$", "2$", "3$", "4$", "5$"];

  todoForm = new FormGroup ({
    questTitle: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    questText: new FormControl('', Validators.required)
  })

  constructor(private todoService: TodoitemService) { }

  ngOnInit() {
    this.todoList = this.todoService.allTodos;
  }

  addTodo() {
    this.newTodo = {
      id: null,
      questTitle: this.todoForm.value.questTitle,
      category: this.todoForm.value.category,
      questText: this.todoForm.value.questText,
      isComplete: false
    }

    if(this.newTodo) {
      this.todoService.addTodo(this.newTodo);
      this.todoForm.reset();
    }
  }

}