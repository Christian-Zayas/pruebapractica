import { createSelector } from '@ngrx/store';
import { StateInterface } from './models/statusInter';
import {AppState} from './peopleStatus'
 
export const selectPeopleFeature = (state: AppState) => state.peoples;
 
export const selectPeoplesFeatureCount = createSelector(
    selectPeopleFeature,
  (state: StateInterface) => state.people
);