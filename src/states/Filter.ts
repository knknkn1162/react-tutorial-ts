import { Todos } from './TodoState'

export enum VisibleTodoType {
  SHOW_COMPLETED = 'SHOW_COMPLICATED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL',
}

export interface TodoList {
  todos: Todos,
  filter: VisibleTodoType,
}

export function getVisibleTodos(todoList: TodoList): Todos {
  const {todos, filter} = todoList;
  switch (filter) {
    case VisibleTodoType.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibleTodoType.SHOW_ALL:
      return todos.filter(t => !t.completed)
    case VisibleTodoType.SHOW_COMPLETED:
    default:
      return todos
  }
}
