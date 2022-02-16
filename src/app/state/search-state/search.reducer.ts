import { createReducer, on } from "@ngrx/store";
import { searchItem } from "./search.action";


export interface SearchState {
  searchItem: any;
};

const initialState: SearchState = {
  searchItem: null,
}


export const searchReducer = createReducer(initialState,
  on(searchItem, (state, action) => ({searchItem: action.searchItem})));