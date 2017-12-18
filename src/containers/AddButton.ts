import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addTodo, TodoAction } from '../actions';
import AddButton, { AddButtonProps } from '../components/AddButton';
import { Todo, Todos } from '../states/TodoState';

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): AddButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect<{}, AddButtonProps, {}>(
  (state: Todos) => ({}),
  mapDispatchToProps
)(AddButton);
