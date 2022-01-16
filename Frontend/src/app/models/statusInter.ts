import { dataPeople } from "./dataPeople";

export interface StateInterface   {
    loading: boolean;
    people: ReadonlyArray<dataPeople>;
}