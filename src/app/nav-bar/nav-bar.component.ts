import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiGetCharacters } from '../state/characters-state/characters.action';
import { apiGetEpisodes } from '../state/episodes-state/episodes.action';
import { apiGetLocations } from '../state/locations-state/locations.action';
import { Router } from '@angular/router';
import { searchItem } from '../state/search-state/search.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  /**
   * Recovery data from store
   */
  data: any;

  constructor(
    private readonly characterStore: Store<{ CharactersState: any }>,
    private readonly locationsStore: Store<{ LocationsState: any }>,
    private readonly episodesStore: Store<{ EpisodesState: any }>,
    private readonly router: Router,
    private readonly searchStore: Store<{ SearchState: any }>
  ) {}
  /**
   * Call de api and recovery data from store Characters
   */
  getCharacters(): void {
    this.characterStore.dispatch(apiGetCharacters());
    this.searchStore.dispatch(searchItem({ searchItem: null }));
  }
  /**
   * Call de api and recovery data from store Locations
   */
  getLocations(): void {
    this.locationsStore.dispatch(apiGetLocations());
    this.searchStore.dispatch(searchItem({ searchItem: null }));
  }
  /**
   * Call de api and recovery data from store Episodes
   */
  getEpisodes(): void {
    this.episodesStore.dispatch(apiGetEpisodes());
    this.searchStore.dispatch(searchItem({ searchItem: null }));
  }
  /**
   * Fetch value according to path
   * @param e value to look for
   */
  search(e: any): void {
    const path = this.router.url;
    if (path === '/') {
      alert('Elige una categoria');
    } else {
      switch (path) {
        case '/characters':
          this.characterStore.subscribe((state) => {
            this.data = state.CharactersState.data;
          });
          this.findOption(this.data, e.target.value);
          break;
        case '/episodes':
          this.episodesStore.subscribe((state) => {
            this.data = state.EpisodesState.data;
          });
          this.findOption(this.data, e.target.value);
          break;
        case '/episodes/episode-characters':
          this.episodesStore.subscribe((state) => {
            this.data = state.EpisodesState.characteres;
          });
          this.findOption(this.data, e.target.value);
          break;
        case '/locations':
          this.locationsStore.subscribe((state) => {
            this.data = state.LocationsState.data;
          });
          this.findOption(this.data, e.target.value);
          break;
        case '/locations/location-characters':
          this.locationsStore.subscribe((state) => {
            this.data = state.LocationsState.characters;
          });
          this.findOption(this.data, e.target.value);
          break;
        default:
          alert('Elige una categoria');
      }
    }
  }
  /**
   * Function to save the search value in the information
   * @param data store information
   * @param value search
   */
  findOption = (data: any, value: string) => {
    const result: any = [];
    (data || []).forEach((e: any) => {
      if (e.name.toUpperCase().includes(value.toLocaleUpperCase())) {
        result.push(e);
      }
    });
    if (result.length > 0) {
      this.searchStore.dispatch(searchItem({ searchItem: result }));
    } else {
      this.searchStore.dispatch(searchItem({ searchItem: null }));
    }
  };
}
