import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../core/services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent {

  @Input() data: Player[];
}
