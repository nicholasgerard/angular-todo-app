import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   @Input() todo: any;
   @Output() complete: EventEmitter<Todo> = new EventEmitter<Todo>();
   @Output() onEdit: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  markTodoComplete(todo: Todo){
    this.complete.emit(todo);
  }

  editTodo(todo: Todo){
    this.onEdit.emit(todo);
  }

}
