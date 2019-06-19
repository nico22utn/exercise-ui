import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService, User } from './user.service';

@Injectable()
export class UserDataService implements UserService {

    constructor(private httpClient:HttpClient) {}

    getUsers(page:string): Observable<User[]> {
        const params = {page};
        const url = `${environment.END_POINT}?${new URLSearchParams(params)}&${environment.KEY}`
        return this.httpClient.get<User[]>(url)
            .pipe(map((players:any) => {
                    return players.data;
                }
            ));
    }

    getCountUsersThatFirstAndLastNameExceedTwelveChars(page: string,countChars:number): Observable<number> {
        const users$ = this.getUsers(page);
        return users$.pipe( map(users => {
            const sizeUsers = users.length;
            const count = users.filter( user => { return this.countLettersFirstAndLastName(user,countChars)}).length;
            return count * 100 / sizeUsers;
        }));
    }

    private countLettersFirstAndLastName(user:User, countChars:number): boolean {
        const { first_name,last_name} = user;
        const countLetters = first_name.length + last_name.length; 
        if ( countLetters > 12) {
            return true;
        } else {
            return false;
        }
    }
}