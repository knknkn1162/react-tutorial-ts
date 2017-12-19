import { VisibleType } from '../states/Filter';

export const SET_FILTER = "SET_FILTER";
export type SET_FILTER = typeof SET_FILTER;

export interface SetFilterAction {
  type: SET_FILTER;
  filter: VisibleType;
}

export function setFilter(filter: VisibleType): SetFilterAction {
  return {
    type: SET_FILTER,
    filter: filter,
  }
}
