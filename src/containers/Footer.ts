import { connect, Dispatch } from 'react-redux';
import { TodoAction } from "../actions";
import { setFilter } from '../actions/visible';
import Footer from "../components/Footer";
import { TodoList, VisibleType } from "../states/Filter";


interface StateFromProps {
  filter: VisibleType;
}

interface DispatchFromProps {
  onLinkClick: (filter: VisibleType) => void;
}



function mapStateToProps(state: TodoList): StateFromProps {
  return {
    filter: state.filter,
  }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onLinkClick: (filter: VisibleType) => {
      dispatch(setFilter(filter))
    },
  };
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
