import { createReducer, on } from '@ngrx/store';

import {
  apiErrorCharacters,
  apiSuccessCharacters,
} from '../characters-state/characters.action';

export interface CharactersState {
  data: any;
  error: any;
}

const initialState: CharactersState = {
  data: null,
  error: null,
};

export const characterReducer = createReducer(
  initialState,
  on(apiSuccessCharacters, (state, action) => ({
    data: action.data,
    error: null,
  })),
  on(apiErrorCharacters, (state, action) => ({
    error: action.error,
    data: null,
  }))
);
