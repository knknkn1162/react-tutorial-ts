import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleTodo, ToggleTodoAction } from "../actions";
import TodoList, { TodoListProps, TodoState } from "../components/TodoList";
import todos from "../reducers/todos"


interface StateFromProps {
  todos: TodoState[]
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void
}

function mapStateToProps(state: TodoListProps): StateFromProps {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch: Dispatch<ToggleTodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
