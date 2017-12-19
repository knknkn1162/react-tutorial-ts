import { Todos } from "../states/TodoState";
import { TodoAction } from "../actions";
import { ADD_TODO } from "../actions/add";
import { TOGGLE_TODO } from "../actions/toggle";

// note that state argument should be initialized due to 
function todos(state: Todos = [], action: TodoAction): Todos {
  switch(action.type) {
   case ADD_TODO:
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
      }
    ];
  case TOGGLE_TODO:
    return state.map(todo => 
      (todo.id == action.id) ? {...todo, completed: !todo.completed} : todo
    );

  default: 
    return state;
 }
}

export default todos;
