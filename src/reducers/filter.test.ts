import * as React from 'react';
import * as enzyme from 'enzyme';
import filter from './filter';
import { VisibleType } from '../states/Filter';
import { TodoActionType } from '../actions';
import { setFilter } from '../actions/visible';
import { ADD_TODO, addTodo } from '../actions/add';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("swtich SHOW_ALL => SHOW_ACTIVE", () => {
  expect(
    filter(VisibleType.SHOW_ALL, setFilter(VisibleType.SHOW_ACTIVE))
  ).toEqual(VisibleType.SHOW_ACTIVE);
});

it("stay SHOW_ALL", () => {
  expect(
    filter(VisibleType.SHOW_ALL, addTodo("hello"))
  ).toEqual(VisibleType.SHOW_ALL);
});
