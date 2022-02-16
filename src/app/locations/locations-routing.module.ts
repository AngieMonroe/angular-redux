import { NgModule } from '@angular/core';
import { LocationsComponent } from './locations/locations.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationCharactersComponent } from './location-characters/location-characters.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LocationsComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'location-characters', component: LocationCharactersComponent },
      { path: '**', redirectTo: '/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LocationsRoutingModule {}
