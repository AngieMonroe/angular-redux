import { createAction, props } from '@ngrx/store';

/**
 * Action to request Characters
 */
const apiGetCharacters = createAction('[api-characters] API get Characters');
/**
 * Action request Characters success
 */
const apiSuccessCharacters = createAction(
  '[api-characters] API Success',
  props<{ data: any }>()
);
/**
 * Action request Characters fail
 */
const apiErrorCharacters = createAction(
  '[api-characters] API Error',
  props<{ error: any }>()
);

export { apiGetCharacters, apiSuccessCharacters, apiErrorCharacters };
