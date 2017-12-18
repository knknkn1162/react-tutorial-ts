import * as React from "react";
import Todo from "./Todo";

export interface TodoState {
  id: number;
  completed: boolean;
  text: string;
}

let id: number = 0;

function generateTodo(text: string, id: number): TodoState {
  return {
    id: id,
    completed: false,
    text: text,
  }
}

export function generateTodos(text: string[]): TodoState[] {
  return text.map(t => {
    let res = generateTodo(t, id);
    id++;
    return res;
  })
}

interface TodoListProps {
  todos: TodoState[];
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <ul>
        {todos.map(todo => 
          <Todo 
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }
}

export default TodoList;
