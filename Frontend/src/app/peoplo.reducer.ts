import { createReducer, on } from "@ngrx/store";
import { dataPeople } from "./models/dataPeople";
import { StateInterface } from "./models/statusInter";
import { showPeople } from "./people.action";

export const initialState: StateInterface = {loading: false, people: []} 

const _peopleReducer = createReducer(
    initialState,
    on(showPeople, (state, { people }) => ({ ...state, people , loading: true}))
);

export function peopleReducer(people : any, action : any) {
    return _peopleReducer(people, action);
};


