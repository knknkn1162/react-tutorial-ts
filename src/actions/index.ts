import { SetFilterAction, SET_FILTER } from './visible';
import { AddTodoAction, ADD_TODO } from './add';
import { ToggleTodoAction, TOGGLE_TODO } from './toggle';
import { VisibleType } from '../states/Filter';

let nextTodoId = 0;

export type TodoActionType = SET_FILTER | TOGGLE_TODO | ADD_TODO; 
export type TodoAction = AddTodoAction | ToggleTodoAction | SetFilterAction;

