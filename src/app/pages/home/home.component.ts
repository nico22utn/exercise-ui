import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../../core/services/player.service';
import { Observable } from 'rxjs';
import  *  as moment from 'moment';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  data: Observable<Player[]>;

  constructor ( private playerService:PlayerService ) {}
  
  ngOnInit() {
    this.data = this.playerService.getPlayers();
  }

  filterData(filters) {
    this.data = this.playerService.getFilteredPlayers(filters);   
  }
}
