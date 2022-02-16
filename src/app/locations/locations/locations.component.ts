import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { apiGetLocationsCharacters } from 'src/app/state/locations-state/locations.action';
import { LocationsState } from 'src/app/state/locations-state/locations.reducer';
import { currentRouter } from 'src/app/state/router-state/router.action';
import { searchItem } from 'src/app/state/search-state/search.action';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
})
export class LocationsComponent implements OnInit {
  /**
   * Recovery data from store
   */
  data: any;
  /**
   * Value retrieved from lookup
   */
  findValue: any;

  constructor(
    private store: Store<{ LocationsState: LocationsState; SearchState: any }>,
    private routerStore: Store<{ RouterState: any }>,
    private readonly router: Router,
    private readonly locationsStore: Store<{ LocationsState: any }>,
    private readonly searchStore: Store<{ SearchState: any }>
  ) {
    this.store.subscribe((state) => {
      this.data = state.LocationsState?.data;
      this.findValue = state.SearchState?.searchItem;
    });
  }
  /**
   * Store current path
   */
  ngOnInit(): void {
    this.routerStore.dispatch(currentRouter({ path: this.router.url }));
  };
  /**
   * tore the episode characters and redirection
   * @param e characters
   */
  getCharacters(e: any): void {
    this.searchStore.dispatch(searchItem({ searchItem: null }));
    this.locationsStore.dispatch(
      apiGetLocationsCharacters({ characteresArray: e })
    );
    this.router.navigateByUrl('/locations/location-characters');
  };
}
