import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css']
})
export class TodoDataComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }
  @Output() todoComplete: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit(): void {
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("functon emit")
  }
  onComplete(todo: Todo) {
    console.log("functon emit")
    this.todoComplete.emit(todo);
  }
}
