import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoButton from './AddTodoButton';
import * as sinon from 'sinon';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders button text", () => {
  const wrapper = enzyme.shallow(<AddTodoButton onSubmit={(s:string)=>{return;}}/>);
  expect(wrapper.find("button").text()).toEqual("Add Todo");
});

it("renders hello when onChange in input", () => {
  const onSubmit = sinon.spy();
  const wrapper = enzyme.shallow(<AddTodoButton onSubmit={onSubmit}/>);
  expect(wrapper.find("button").text()).toEqual("Add Todo");

  wrapper.find("input").simulate('change', {currentTarget: { value: 'hello' }});
  expect(wrapper.state().input).toEqual('hello');
});

it("onSubmit in form", () => {
  const onSubmit = sinon.spy();
  const wrapper = enzyme.shallow(<AddTodoButton onSubmit={onSubmit}/>);
  wrapper.setState({input: "hello"});
  wrapper.find("form").simulate("submit", { preventDefault() {} });

  expect(onSubmit.callCount).toEqual(1);
  expect(onSubmit.args[0]).toEqual(["hello"]);
});
