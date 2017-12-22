import { Todos } from './TodoState'

export enum VisibleType {
  SHOW_COMPLETED = 'SHOW_COMPLICATED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL',
}

export interface TodoList {
  todos: Todos,
  filter: VisibleType,
}

export function getVisibleTodos(todoList: TodoList): Todos {
  const {todos, filter} = todoList;
  switch (filter) {
    case VisibleType.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibleType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibleType.SHOW_ALL:
    default:
      return todos
  }
}

export const filterTitles = {
  [VisibleType.SHOW_ALL]: 'All',
  [VisibleType.SHOW_ACTIVE]: 'Active',
  [VisibleType.SHOW_COMPLETED]: 'Completed'
};
