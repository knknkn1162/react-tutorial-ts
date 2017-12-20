import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList from './TodoList';
import * as sinon from 'sinon';
import {Todo as TodoState } from '../states/TodoState';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe('renders', () => {
    it("renders ul", () => {
      const todos = [
        {id: 0, completed: false, text: "hello"},
        {id: 1, completed: false, text: "goodbye"},
      ];
      const wrapper = enzyme.shallow(
        <TodoList 
          todos={todos} 
          onTodoClick={(n: number)=>{return;}}
        />
      );

      expect(wrapper.find("ul").at(0).find("Todo")).toHaveLength(2);
      expect(wrapper.find("Todo").at(0).prop("text")).toEqual("hello");
    });
});

describe('event', () => {
  it("test onClick", () => {
    const onTodoClick = sinon.spy();
    const todos = [
      {id: 0, completed: true, text: "hello"},
      {id: 1, completed: false, text: "goodbye"},
    ];
    const wrapper = enzyme.shallow(
      <TodoList
        todos={todos} 
        onTodoClick={onTodoClick}
      />
    );
    wrapper.find("Todo").map(w => w.simulate('click'));

    expect(onTodoClick.callCount).toEqual(2);
    expect(onTodoClick.args).toEqual([[0], [1]]);
  });
});
