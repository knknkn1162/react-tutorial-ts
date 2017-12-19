import * as React from 'react';
import * as enzyme from 'enzyme';
import Link from './Link';
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders anchor when active=true", () => {
  const onDummy = () => {return;};
  const wrapper = enzyme.shallow(
    <Link 
      active={true}
      children="hello"
      onClick={onDummy}
    />
  );

  expect(wrapper.find('span').text()).toEqual("hello");
});


it("renders anchor when active=false", () => {
  const onDummy = () => {return;};
  const wrapper = enzyme.shallow(
    <Link 
      active={false}
      children="hello"
      onClick={onDummy}
    />
  );
  //expect(wrapper.find('a').prop('href')).toEqual("");
  expect(wrapper.find('a').text()).toEqual("hello");
});
