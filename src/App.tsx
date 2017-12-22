import * as React from 'react';
import TodoList from "./containers/TodoList";
import AddTodoButton from "./containers/AddTodoButton";
import Footer from './containers/Footer';


function app(): JSX.Element {
  return (
    <div>
      <AddTodoButton />
      <TodoList />
      <Footer />
    </div>
  )
}

export default app;
