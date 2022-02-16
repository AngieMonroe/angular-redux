import { createAction, props } from '@ngrx/store';

/**
 * Action request Locations
 */
const apiGetLocations = createAction('[api-location] API get Locations');
/**
 * Action request Locations Success
 */
const apiSuccessLocations = createAction(
  '[api-locations] API Success',
  props<{ data: any }>()
);
/**
 * Action request Locations fail
 */
const apiErrorLocations = createAction(
  '[api-locations] API Error',
  props<{ error: any }>()
);
/**
 * Action request Location-characters
 */
const apiGetLocationsCharacters = createAction(
  '[api-locations-characters] API get Characteres intro locations',
  props<{ characteresArray: any }>()
);
/**
 * Action request Location-characters success
 */
const apiSuccessLocationsCharacters = createAction(
  '[api-locations-characters] API Success',
  props<{ characteres: any }>()
);

export {
  apiGetLocations,
  apiSuccessLocations,
  apiErrorLocations,
  apiGetLocationsCharacters,
  apiSuccessLocationsCharacters,
};
