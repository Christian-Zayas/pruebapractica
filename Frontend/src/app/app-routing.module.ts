import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { TableUserComponent } from './component/table-user/table-user.component';
import { UpdateUsersComponent } from './component/update-users/update-users.component';
const routes: Routes = [
  {
    path: '',
    component: TableUserComponent
  },{
    path: 'adduser',
    component: AddUserComponent
  },
  {
    path: 'update/edit/:id',
    component: UpdateUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
