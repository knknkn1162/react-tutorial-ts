import { VisibleTodoType } from '../states/Filter';
import { TodoActionType, TodoAction } from '../actions';


function filter(state: VisibleTodoType, action: TodoAction) {
  switch(action.type) {
    case TodoActionType.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
