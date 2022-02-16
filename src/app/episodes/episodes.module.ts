import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';



@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeCharactersComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
