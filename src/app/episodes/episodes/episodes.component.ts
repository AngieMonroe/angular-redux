import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { Store } from '@ngrx/store';
import { apiGetEpisodesCharacters } from 'src/app/state/episodes-state/episodes.action';
import { EpisodesState } from 'src/app/state/episodes-state/episodes.reducer';
import { currentRouter } from 'src/app/state/router-state/router.action';
import { searchItem } from 'src/app/state/search-state/search.action';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
})
export class EpisodesComponent implements OnInit {
  /**
   * Information recovery from the store
   */
  data: any;
  /**
   * Value retrieved from lookup
   */
  findValue: any;

  constructor(
    private store: Store<{ EpisodesState: EpisodesState; SearchState: any }>,
    private readonly router: Router,
    private routerStore: Store<{ RouterState: RouterState }>,
    private readonly episodesStore: Store<{ EpisodesState: any }>,
    private readonly searchStore: Store<{ SearchState: any }>
  ) {
    this.store.subscribe((state) => {
      this.data = state.EpisodesState?.data;
      this.findValue = state.SearchState?.searchItem;
    });
  }
  /**
   * Store current path
   */
  ngOnInit(): void {
    this.routerStore.dispatch(currentRouter({ path: this.router.url }));
  }

  /**
   * Store the episode characters and redirection
   * @param array from characters
   */
  getCharacteres(array: any): void {
    this.searchStore.dispatch(searchItem({ searchItem: null }));
    this.episodesStore.dispatch(
      apiGetEpisodesCharacters({ characteresArray: array })
    );
    this.router.navigateByUrl('/episodes/episode-characters');
  }
}
