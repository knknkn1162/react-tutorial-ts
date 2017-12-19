export const TOGGLE_TODO = "TOGGLE_TODO";
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export interface ToggleTodoAction {
  type: TOGGLE_TODO;
  id: number;
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type:　TOGGLE_TODO,
    id: id,
  }
}
