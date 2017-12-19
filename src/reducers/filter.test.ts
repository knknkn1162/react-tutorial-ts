import * as React from 'react';
import * as enzyme from 'enzyme';
import filter from './filter';
import { VisibleTodoType } from '../states/Filter';
import { TodoActionType } from '../actions'

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("swtich SHOW_ALL => SHOW_ACTIVE", () => {
  expect(
    filter(VisibleTodoType.SHOW_ALL, {type: TodoActionType.SET_FILTER, filter: VisibleTodoType.SHOW_ACTIVE})
  ).toEqual(VisibleTodoType.SHOW_ACTIVE);
});

it("stay SHOW_ALL", () => {
  expect(
    filter(VisibleTodoType.SHOW_ALL, {type: TodoActionType.ADD_TODO, id: -1, text: "dummy"})
  ).toEqual(VisibleTodoType.SHOW_ALL);
});


