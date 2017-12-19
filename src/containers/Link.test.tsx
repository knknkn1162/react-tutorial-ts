import * as React from 'react';
import * as enzyme from 'enzyme';
import Link from './Link';
import * as Adapter from "enzyme-adapter-react-16";
import { createStore } from 'redux';
import todoApp from '../reducers/';
import { TodoList } from '../states/Filter';

enzyme.configure({ adapter: new Adapter() });
import { VisibleType } from "../states/Filter";

it('dive connected Link components when state.filter === props.filter', () => {
  const store = createStore<TodoList>(todoApp, {todos: [], filter: VisibleType.SHOW_ALL}); 
  const wrapper = enzyme.shallow(<Link filter={VisibleType.SHOW_ALL}/>, { context: {store: store } });
  expect(wrapper.dive().find('span').text()).toEqual("All");
});

it('dive connected Link components when state.filter !== props.filter', () => {
  const store = createStore<TodoList>(todoApp, {todos: [], filter: VisibleType.SHOW_ALL}); 
  const wrapper = enzyme.shallow(<Link filter={VisibleType.SHOW_ACTIVE}/>, { context: {store: store } });
  expect(wrapper.dive().find('a').text()).toEqual("Active");
});
