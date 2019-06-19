import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPlayersComponent } from './list-players/list-players.component';

const COMPONENTS = [ HomeComponent, SearchPlayerComponent, ListPlayersComponent];
@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [ CommonModule, HomeRoutingModule, FormsModule , ReactiveFormsModule ]
})
export class HomeModule {}