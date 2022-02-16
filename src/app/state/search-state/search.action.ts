import { createAction, props } from '@ngrx/store';

/**
 * Action save searchItem
 */
export const searchItem = createAction(
  '[search] Item find',
  props<{ searchItem: any }>()
);
