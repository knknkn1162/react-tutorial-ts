import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import { TodoList } from '../states/Filter';

const todoApp = combineReducers<TodoList>({
  todos,
  filter,
});

// const todoApp: (state: TodoList, action: AnyAction) => TodoList
export default todoApp;
