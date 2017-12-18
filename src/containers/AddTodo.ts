import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { addTodo, AddTodoAction } from '../actions';
import AddButton, { AddButtonProps } from '../components/AddButton'
import { TodoState } from '../components/TodoList';

function mapStateToProps(state: TodoState): {} {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<AddTodoAction>): AddButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
