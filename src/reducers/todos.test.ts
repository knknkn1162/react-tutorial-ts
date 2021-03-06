import * as React from 'react';
import * as enzyme from 'enzyme';
import todos from './todos';
import { addTodo, ADD_TODO } from '../actions/add';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders text when completed=true", () => {
  let state = [
    {id: 0, text: "hello", completed: false},
  ];
  state = todos(state, {type: ADD_TODO, id: 1, text: "goodbye"});

  expect(state).toEqual([
    {id: 0, text: "hello", completed: false},
    {id: 1, text: "goodbye", completed: false},
  ]);
});
