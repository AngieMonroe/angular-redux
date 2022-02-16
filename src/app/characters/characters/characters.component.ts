import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { Store } from '@ngrx/store';
import { CharactersState } from 'src/app/state/characters-state/characters.reducer';
import { currentRouter } from 'src/app/state/router-state/router.action';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  /**
   * Information recovery from store
   */
  data: any;
  /**
   * More información from character
   */
  character: any;
  /**
   * Value recovered from filtrate
   */
  findValue: any;

  constructor(
    private store: Store<{
      CharactersState: CharactersState;
      SearchState: any;
    }>,
    private routerStore: Store<{ RouterState: RouterState }>,
    private readonly router: Router
  ) {
    this.store.subscribe((state) => {
      this.data = state.CharactersState?.data;
      this.findValue = state.SearchState?.searchItem;
    });
  }
  /**
   * Recovery current path and save in the store
   */
  ngOnInit(): void {
    this.routerStore.dispatch(currentRouter({ path: this.router.url }));
  }

  /**
   * information to be displayed in the modal
   * @param id of character
   */
  getCharacter(id: number): void {
    if (this.data) {
      this.character = this.data.find((item: { id: number }) => item.id === id);
    }
  }
}
