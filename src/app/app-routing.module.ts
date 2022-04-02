import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AboutComponentComponent } from './MyComponent/about-component/about-component.component';


const routes: Routes = [
  {path: '', component: TodoItemComponent},
  {path: 'about', component: AboutComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
