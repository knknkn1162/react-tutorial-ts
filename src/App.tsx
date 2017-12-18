import * as React from 'react';
import CounterButton from './containers/AddTodo';
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";

function app(): JSX.Element {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default app;
