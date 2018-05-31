import { TodoitemService } from './../services/todoitem.service';
import { TodoItem } from './../models/todoitem.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item-template',
  templateUrl: './todo-item-template.component.html',
  styleUrls: ['./todo-item-template.component.css']
})
export class TodoItemTemplateComponent implements OnInit {
  
  @Input() todoItem: TodoItem
  
  constructor(private todoService: TodoitemService) { }

  ngOnInit() {
  }

  delete() {
    if(confirm("Abandon this quest?")) {
      this.todoService.deleteTodo(this.todoItem);
    }
  }

  completeTodo() {
    this.todoService.completeTodo(this.todoItem);
  }

}
