import * as React from 'react';
import TodoList from "./containers/TodoList";
import AddButton from "./containers/AddButton";
//      <AddButton />
function app(): JSX.Element {
  return (
    <div>
      <AddButton />
      <TodoList />
    </div>
  );
}

export default app;
