import * as React from 'react';
import * as enzyme from 'enzyme';
import AddButton from './AddButton';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders input", () => {
  let res: string;
  const onDummy = (s: string) => {res=s;return;};
  const wrapper = enzyme.shallow(<AddButton onSubmit={onDummy}/>);
  wrapper.setState({input: "hoge"})
  wrapper.find("form").simulate("submit");

  expect(res).toEqual("hoge");
  expect(wrapper.state().input).toEqual("");
});