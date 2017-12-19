export const ADD_TODO = "ADD_TODO";
export type ADD_TODO = typeof ADD_TODO;

let nextTodoId = 0;

export interface AddTodoAction {
  type: ADD_TODO;
  id: number;
  text: string;
}

export function addTodo(text: string): AddTodoAction {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text,
  }
}
