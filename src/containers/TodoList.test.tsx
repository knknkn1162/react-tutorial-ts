import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList from './TodoList';
import * as Adapter from "enzyme-adapter-react-16";
import { createStore } from 'redux';
import todoApp from '../reducers/';
import { TodoList as TodoListState } from '../states/Filter';


enzyme.configure({ adapter: new Adapter() });
import { VisibleType } from "../states/Filter";

describe('event', () => {
  it('test TodoList when VisibleType.SHOW_ALL', () => {
    const store = createStore<TodoListState>(
      todoApp, 
      {
        todos: [
          {id: 0, completed: false, text: "hello"},
          {id: 1, completed: false, text: "goodbye"}
        ],
        filter: VisibleType.SHOW_ALL}
    ); 
    const wrapper = enzyme.mount(<TodoList/>, { context: {store: store } });

    expect(wrapper.find("ul").find("li").map(w => w.text())).toEqual(["hello", "goodbye"]);

    wrapper.find("ul").find("li").at(0).simulate("click");
    expect(wrapper.find("ul").find("li").map(w => w.props().style.textDecoration)).toEqual(["line-through", "none"]); 
  });

  it('test TodoList when VisibleType.SHOW_ACTIVE', () => {
    const store = createStore<TodoListState>(
      todoApp, 
      {
        todos: [
          {id: 0, completed: false, text: "hello"},
          {id: 1, completed: false, text: "goodbye"}
        ],
        filter: VisibleType.SHOW_ACTIVE}
    ); 
    const wrapper = enzyme.mount(<TodoList/>, { context: {store: store } });

    expect(wrapper.find("ul").find("li").map(w => w.text())).toEqual(["hello", "goodbye"]);
    
    wrapper.find("ul").find("li").at(0).simulate("click");
    expect(wrapper.find("ul").find("li").map(w => w.text())).toEqual(["goodbye"]); 
  });
});
