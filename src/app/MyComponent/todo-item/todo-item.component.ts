import { Component, OnInit } from '@angular/core';
import { Todo } from "src/app/Todo"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todos: Todo[];
  localItem: any;
  constructor() { 
    this.localItem = localStorage.getItem('todos');
    if (this.localItem==null){
    this.todos=[]
  }
  else{
    this.todos=JSON.parse(this.localItem)}
    
   }
  
  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  
  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  completeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos[index].completed);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

