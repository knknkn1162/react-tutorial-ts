export interface Todo {
  id: number;
  completed: boolean;
  text: string;
}
export type Todos = Todo[];

let id: number = 0;

function generateTodo(text: string, id: number): Todo {
  return {
    id: id,
    completed: false,
    text: text,
  }
}

export function generateTodos(text: string[]): Todos {
  return text.map(t => {
    let res = generateTodo(t, id);
    id++;
    return res;
  })
}
