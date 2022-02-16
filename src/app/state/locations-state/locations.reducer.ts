import { createReducer, on } from '@ngrx/store';
import {
  apiErrorLocations,
  apiSuccessLocations,
  apiSuccessLocationsCharacters,
} from './locations.action';

export interface LocationsState {
  data: any;
  error: any;
  characters: any;
}

const initialState: LocationsState = {
  data: null,
  error: null,
  characters: null,
};

export const locationsReducer = createReducer(
  initialState,
  on(apiSuccessLocations, (state, action) => ({
    data: action.data,
    error: null,
    characters: null,
  })),
  on(apiErrorLocations, (state, action) => ({
    error: action.error,
    data: null,
    characters: null,
  })),
  on(apiSuccessLocationsCharacters, (state, action) => ({
    error: null,
    data: null,
    characters: action.characteres,
  }))
);
