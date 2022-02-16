import { createReducer, on } from '@ngrx/store';
import {
  apiErrorEpisodes,
  apiSuccessEpisodes,
  apiSuccessEpisodesCharacters,
} from './episodes.action';

export interface EpisodesState {
  data: any;
  error: any;
  characteres: any;
}

const initialState: EpisodesState = {
  data: null,
  error: null,
  characteres: null,
};

export const episodesReducer = createReducer(
  initialState,
  on(apiSuccessEpisodes, (state, action) => ({
    data: action.data,
    error: null,
    characteres: null,
  })),
  on(apiErrorEpisodes, (state, action) => ({
    error: action.error,
    data: null,
    characteres: null,
  })),
  on(apiSuccessEpisodesCharacters, (state, action) => ({
    error: null,
    data: null,
    characteres: action.characteres,
  }))
);
