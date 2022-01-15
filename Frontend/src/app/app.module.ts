import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UpdateUsersComponent } from './component/update-users/update-users.component';
import { SearchUsersComponent } from './component/search-users/search-users.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DeleteusersComponent } from './component/deleteusers/deleteusers.component';
import { TableUserComponent } from './component/table-user/table-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUsersComponent,
    SearchUsersComponent,
    NavigationComponent,
    DeleteusersComponent,
    TableUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
