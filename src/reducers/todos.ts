import { TodoState } from "../components/TodoList";
import { TodoAction, AddTodoAction } from "../actions";

function todos(state: TodoState[], action: AddTodoAction): TodoState[] {
 switch(action.type) {
   case TodoAction.ADD_TODO:
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
  case TodoAction.ADD_TODO:
    return state.map(todo => 
      (todo.id == action.id) ? {...todo, completed: !todo.completed} : todo
    );

  default: 
    return state;
 }
}

export default todos;
