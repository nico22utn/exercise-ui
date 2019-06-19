import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

@Injectable()
export abstract class UserService {
    abstract getUsers(page:string): Observable<User[]>;
    abstract getCountUsersThatFirstAndLastNameExceedTwelveChars(page:string,countChars:number):Observable<number>;
}