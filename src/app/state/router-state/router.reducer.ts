import { createReducer, on } from '@ngrx/store';
import { currentRouter } from './router.action';

export interface RouterState {
  path: string;
}

const initialState: RouterState = {
  path: '',
};

export const characterReducer = createReducer(
  initialState,
  on(currentRouter, (state, action) => ({ path: action.path }))
);
