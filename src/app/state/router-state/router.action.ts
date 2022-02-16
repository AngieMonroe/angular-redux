import { createAction, props } from '@ngrx/store';

/**
 * Action save path
 */
export const currentRouter = createAction(
  '[route] Route active',
  props<{ path: string }>()
);
