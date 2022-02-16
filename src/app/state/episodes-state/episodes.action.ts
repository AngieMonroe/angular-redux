import { createAction, props } from '@ngrx/store';

/**
 * Action request Episodes
 */
const apiGetEpisodes = createAction('[api-episodes] API get Episodes');
/**
 * Action request Episodessuccess
 */
const apiSuccessEpisodes = createAction(
  '[api-episodes] API Success',
  props<{ data: any }>()
);
/**
 * Action request Episodes fail
 */
const apiErrorEpisodes = createAction(
  '[api-episodes] API Error',
  props<{ error: any }>()
);
/**
 * Action request episode-characters
 */
const apiGetEpisodesCharacters = createAction(
  '[api-episodes-characters] API get Characteres intro episodes',
  props<{ characteresArray: any }>()
);
/**
 * Action request episode-characters success
 */
const apiSuccessEpisodesCharacters = createAction(
  '[api-episodes-characters] API Success',
  props<{ characteres: any }>()
);

export {
  apiGetEpisodes,
  apiSuccessEpisodes,
  apiErrorEpisodes,
  apiGetEpisodesCharacters,
  apiSuccessEpisodesCharacters,
};
