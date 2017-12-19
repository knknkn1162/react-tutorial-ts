import { ReactNode } from 'react';
import { connect, Dispatch } from 'react-redux';
import { setFilter, TodoAction } from "../actions";
import Link from "../components/Link";
import { TodoList } from "../states/Filter";
import { VisibleTodoType } from "../states/Filter"

interface StateFromProps {
  active: boolean;
  children: React.ReactNode;
}

interface DispatchFromProps {
  onClick: () => void,
}

interface OwnProps {
  filter: VisibleTodoType;
}

function mapStateToProps(state: TodoList, ownProps: OwnProps): StateFromProps {
  return {
    active: ownProps.filter === state.filter,
    children: <string>state.filter,
  }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>, ownProps: OwnProps): DispatchFromProps {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    },
  };
}

export default connect<StateFromProps, DispatchFromProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
