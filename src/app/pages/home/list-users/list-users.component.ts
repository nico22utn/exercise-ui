import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../../core/services/user.service';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  percentage: Observable<number>;
  pageForm:FormGroup;
  users$: Observable<User[]>;
  limitPage: number;
  constructor(private userService:UserService, private fb:FormBuilder) { }

  ngOnInit() {
    this.limitPage = environment.LIMIT_PAGE;
    this.pageForm = this.fb.group({
      page: ['', [Validators.required,Validators.min(0),Validators.max(this.limitPage)]]
    })
    this.percentage = of(0);
  }
  selectPage() {  
    const {page} = this.pageForm.value;
    console.log("Entra con la pagina ",page);
    const chars = 12;
    this.percentage = this.userService.getCountUsersThatFirstAndLastNameExceedTwelveChars(page,chars);
    this.users$ = this.userService.getUsers(page);
  }
}
