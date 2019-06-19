import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Player {
    contractUntil: Date
    dateOfBirth: Date
    jerseyNumber: number
    name: string
    nationality: string
    position: string
    age?: number
}

@Injectable()
export abstract class PlayerService {
    abstract getPlayers(): Observable<Player[]>;
    abstract getFilteredPlayers(filters):Observable<Player[]>;
    abstract getAge(dateOfBirth:Date): number;
}