import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CharactersComponent },
      { path: '**', redirectTo: '/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CharactersRoutingModule {}
