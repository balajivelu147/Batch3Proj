import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  stateItem: string[] = ['Bangalore', 'Chennai', 'Hyderabad', 'Pune','Mumbai', 'Mysore'];
  filteredStateItem: Observable<string[]>;
  state: FormControl;
  constructor() { 
    
    this.state = new FormControl();
    this.filteredStateItem = of(this.stateItem);
  }

  ngOnInit(): void {
   this.filteredStateItem = this.state.valueChanges.pipe(
      startWith(''),
      map(stateInput => this.stateItem.filter(state => 
       state.toLowerCase().indexOf(stateInput.toLowerCase()) !== -1 ))
    )
  }

}
