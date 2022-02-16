import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeCharactersComponent } from './episode-characters/episode-characters.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: EpisodesComponent},
    { path: 'episodes', component: EpisodesComponent },
    { path: 'episode-characters', component: EpisodeCharactersComponent },
    { path: '**', redirectTo: '/'}
  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EpisodesRoutingModule { }
