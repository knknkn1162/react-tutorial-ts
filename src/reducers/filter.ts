import { VisibleType } from '../states/Filter';
import { TodoAction } from '../actions';
import { SET_FILTER } from '../actions/visible';


function filter(state: VisibleType = VisibleType.SHOW_ALL, action: TodoAction): VisibleType {
  switch(action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
