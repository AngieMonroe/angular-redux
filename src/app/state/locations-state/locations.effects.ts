import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, zip } from 'rxjs';
import { RetrieveDataService } from 'src/app/services/retrieve-data.service';
import {
  apiErrorLocations,
  apiGetLocations,
  apiGetLocationsCharacters,
  apiSuccessLocations,
  apiSuccessLocationsCharacters,
} from './locations.action';

@Injectable()
export class LocationsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly retrieveData: RetrieveDataService
  ) {}
  /**
   * Function to make request
   * @returns observable of Locations
   */
  getLocationsDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiGetLocations),
      mergeMap((action) => {
        return this.retrieveData.getLocations().pipe(
          map((res) => apiSuccessLocations({ data: res.results })),
          catchError((error) => of(apiErrorLocations({ error })))
        );
      })
    );
  });
  /**
   * Function to make request
   * @returns observable of Characters from Location
   */
  getCharacteresDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiGetLocationsCharacters),
      mergeMap((action) => {
        let arrayData = [];
        for (let i = 0; i < action.characteresArray.length; i++) {
          arrayData.push(
            this.retrieveData.getCharactersArray(action.characteresArray[i])
          );
        }
        return zip(arrayData).pipe(
          map((res) => apiSuccessLocationsCharacters({ characteres: res }))
        );
      })
    );
  });
}
