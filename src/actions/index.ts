import { VisibleTodoType } from '../states/Filter';

let nextTodoId = 0;

export enum TodoActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_FILTER = 'SET_FILTER',
}


export interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO;
  id: number;
}

export interface SetFilterAction {
  type: TodoActionType.SET_FILTER;
  filter: VisibleTodoType;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | SetFilterAction;

export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoActionType.ADD_TODO,
    id: nextTodoId++,
    text: text,
  }
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TodoActionType.TOGGLE_TODO,
    id: id,
  }
}

export function setFilter(filter: VisibleTodoType): SetFilterAction {
  return {
    type: TodoActionType.SET_FILTER,
    filter: filter,
  }
}
