import { Injectable } from '@angular/core';
import { PlayerService, Player } from './player.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import  *  as moment from 'moment';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class PlayerDataService implements PlayerService {

    constructor(private httpClient:HttpClient) {}

    getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(`${environment.END_POINT}`)
            .pipe(map((players) => {
                    players.forEach( player => Object.assign(player, {age: this.getAge(player.dateOfBirth)}))
                    return players;
                }
            ));
    }

    getFilteredPlayers(filters):Observable<Player[]> {
        const data$ = this.getPlayers();
        return data$.pipe(map(players => {
            return players.filter( player => { return this.filterPlayer(player,filters)});
        }))
    }

    private filterPlayer(player:Player,filters):boolean {
        const filtersProperties = Object.getOwnPropertyNames(filters);
        let satisfiedCondition = 0;
        filtersProperties.forEach( filter => {
            if(player[filter] === filters[filter]) {
                satisfiedCondition += 1;
            } else if (filter === environment.NAME_FILTER && player[filter].includes(filters[filter])) {
                satisfiedCondition += 1;
            }
        })
        return satisfiedCondition === Object.values(filters).length;
    }

    getAge(birtday): number {
        const toMoment = moment(birtday,environment.FORMAT_DATE);
        return moment().diff(toMoment,'years');
    }
}