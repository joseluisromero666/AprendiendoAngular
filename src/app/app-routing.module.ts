import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path:'add',
    component: AddItemComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
