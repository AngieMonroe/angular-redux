import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocationsState } from 'src/app/state/locations-state/locations.reducer';

@Component({
  selector: 'app-location-characters',
  templateUrl: './location-characters.component.html',
})
export class LocationCharactersComponent {
  /**
   * Recovery data from store
   */
  data: any;
  /**
   * Value recovered from filtrate
   */
  findValue: any;

  constructor(
    private store: Store<{ LocationsState: LocationsState; SearchState: any }>
  ) {
    this.store.subscribe((state) => {
      this.data = state.LocationsState?.characters;
      this.findValue = state.SearchState?.searchItem;
    });
  }
}
