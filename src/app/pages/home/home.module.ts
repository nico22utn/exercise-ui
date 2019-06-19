import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';

const COMPONENTS = [ HomeComponent, ListUsersComponent];
@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [ CommonModule, HomeRoutingModule, FormsModule , ReactiveFormsModule ]
})
export class HomeModule {}