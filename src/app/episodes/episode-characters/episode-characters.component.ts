import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EpisodesState } from 'src/app/state/episodes-state/episodes.reducer';

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
})
export class EpisodeCharactersComponent {
  /**
   * Information recovery from store
   */
  data: any;
  /**
   * Value recovered from filtrate
   */
  findValue: any;

  constructor(
    private store: Store<{ EpisodesState: EpisodesState; SearchState: any }>
  ) {
    this.store.subscribe((state) => {
      this.data = state.EpisodesState?.characteres;
      this.findValue = state.SearchState?.searchItem;
    });
  }
}
