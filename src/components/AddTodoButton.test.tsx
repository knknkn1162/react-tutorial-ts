import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoButton from './AddTodoButton';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders input", () => {
  let res: string;
  const onDummy = (s: string) => {return;};
  const wrapper = enzyme.shallow(<AddTodoButton onSubmit={onDummy}/>);
  wrapper.setState({input: "hello"});
  expect(wrapper.find("button").text()).toEqual("Add Todo");
});
