import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './state/characters-state/characters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/characters-state/characteres.effects';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EpisodesEffects } from './state/episodes-state/episodes.effects';
import { LocationsEffects } from './state/locations-state/locations.effects';
import { episodesReducer } from './state/episodes-state/episodes.reducer';
import { locationsReducer } from './state/locations-state/locations.reducer';
import { searchReducer } from './state/search-state/search.reducer';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      CharactersState: characterReducer,
      LocationsState: locationsReducer,
      EpisodesState: episodesReducer,
      SearchState: searchReducer,
    }),
    EffectsModule.forRoot([
      CharactersEffects,
      EpisodesEffects,
      LocationsEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
