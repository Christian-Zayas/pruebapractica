import { ActionReducerMap } from "@ngrx/store";
import { dataPeople } from "./models/dataPeople";
import { StateInterface } from "./models/statusInter";
import { peopleReducer } from "./peoplo.reducer";

export interface AppState {
    peoples: StateInterface;
   
  }

  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    peoples: peopleReducer
  }