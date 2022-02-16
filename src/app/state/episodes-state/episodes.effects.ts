import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, zip } from 'rxjs';
import { RetrieveDataService } from 'src/app/services/retrieve-data.service';
import {
  apiErrorEpisodes,
  apiGetEpisodes,
  apiGetEpisodesCharacters,
  apiSuccessEpisodes,
  apiSuccessEpisodesCharacters,
} from './episodes.action';

@Injectable()
export class EpisodesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly retrieveData: RetrieveDataService
  ) {}
  /**
   * Function to make request
   * @returns observable of Episodes
   */
  getEpisodesDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiGetEpisodes),
      mergeMap((action) => {
        return this.retrieveData.getEpisodes().pipe(
          map((res) => apiSuccessEpisodes({ data: res.results })),
          catchError((error) => of(apiErrorEpisodes({ error })))
        );
      })
    );
  });
  /**
   * Function to make request
   * @returns observable of Characters from Episodes
   */
  getCharacteresDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiGetEpisodesCharacters),
      mergeMap((action) => {
        let arrayData = [];
        for (let i = 0; i < action.characteresArray.length; i++) {
          arrayData.push(
            this.retrieveData.getCharactersArray(action.characteresArray[i])
          );
        }
        return zip(arrayData).pipe(
          map((res) => apiSuccessEpisodesCharacters({ characteres: res }))
        );
      })
    );
  });
}
