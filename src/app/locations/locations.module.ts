import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCharactersComponent } from './location-characters/location-characters.component';

@NgModule({
  declarations: [LocationsComponent, LocationCharactersComponent],
  imports: [CommonModule, LocationsRoutingModule],
})
export class LocationsModule {}
