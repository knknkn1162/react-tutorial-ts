import { connect, Dispatch } from 'react-redux';
import { TodoAction } from "../actions";
import { toggleTodo } from '../actions/toggle';
import TodoList, { TodoListProps } from "../components/TodoList";
import { Todos } from "../states/TodoState";
import { TodoList as TodoListState, getVisibleTodos } from "../states/Filter";

interface StateFromProps {
  todos: Todos,
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void,
}

function mapStateToProps(state: TodoListState): StateFromProps {
  return {
    todos: getVisibleTodos(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
