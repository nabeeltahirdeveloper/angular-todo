import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { TodoDataComponent } from './MyComponent/todo-data/todo-data.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './MyComponent/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTodoComponent,
    TodoItemComponent,
    TodoDataComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
