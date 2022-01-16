import { createAction, props } from "@ngrx/store"; 
import { dataPeople } from "./models/dataPeople";


export  const showPeople = createAction(
    '[People list] lead to people list',
    props<{people: dataPeople[]}>()
     );