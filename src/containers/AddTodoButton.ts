import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { TodoAction } from '../actions';
import { addTodo } from '../actions/add';
import AddButton, { AddTodoButtonProps } from '../components/AddTodoButton';
import { Todo, Todos } from '../states/TodoState';

function mapStateToProps(state: Todos): {} {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): AddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect<{}, AddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
