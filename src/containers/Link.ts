import { ReactNode } from 'react';
import { connect, Dispatch } from 'react-redux';
import { TodoAction } from "../actions";
import { setFilter } from '../actions/visible';
import Link from "../components/Link";
import { TodoList, VisibleType } from "../states/Filter";

interface StateFromProps {
  active: boolean;
  children: React.ReactNode;
}

interface DispatchFromProps {
  onClick: () => void,
}

interface OwnProps {
  filter: VisibleType;
}

function getChildren(filter: VisibleType) {
  switch(filter) {
    case VisibleType.SHOW_ACTIVE:
      return "Active"
    case VisibleType.SHOW_ALL:
      return "All"
    case VisibleType.SHOW_COMPLETED:
      return "Completed"
    default:
      return undefined
  }
}

function mapStateToProps(state: TodoList, ownProps: OwnProps): StateFromProps {
  return {
    active: ownProps.filter === state.filter,
    children: getChildren(ownProps.filter),
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
