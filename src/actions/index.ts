let nextTodoId = 0;

export enum TodoAction {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface AddTodoAction {
  type: TodoAction.ADD_TODO;
  id: number;
  text: string;
}


export interface ToggleTodoAction {
  type: TodoAction.TOGGLE_TODO;
  id: number;
}

export function addTodo(text: string): AddTodoAction {
  return {
    type: TodoAction.ADD_TODO,
    id: nextTodoId++,
    text: text,
  }
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TodoAction.TOGGLE_TODO,
    id: id,
  }
}

