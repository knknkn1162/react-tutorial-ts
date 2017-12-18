import * as React from 'react';
import * as enzyme from 'enzyme';
import AddButton from './AddButton';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders input", () => {
  let res: string;
  const onDummy = (s: string) => {return;};
  const wrapper = enzyme.shallow(<AddButton onSubmit={onDummy}/>);

  expect(wrapper.find("button").text()).toEqual("Add Todo");
});
