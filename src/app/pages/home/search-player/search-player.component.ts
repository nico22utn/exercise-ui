import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  @Output() itemToFilter = new EventEmitter();
  playerForm: FormGroup;
  positions = environment.POSITIONS;
  defaultPosition = environment.DEFAULT_POSITION;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name: ['',[Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)*?$')]],
      position: [''],
      age: ['',[Validators.min(18),Validators.max(40)]]
    });
    this.playerForm.patchValue({
      position: this.defaultPosition
    })
  }

  searchPlayers() {
    let filters = {};
    let {name,position,age} = this.playerForm.value;
    filters = name ? Object.assign(filters, {name} ) : filters;
    filters = age ? Object.assign(filters, {age} ) : filters;
    filters = position === this.defaultPosition ? filters : Object.assign(filters, {position} )
    this.itemToFilter.emit(filters);
  }
}
