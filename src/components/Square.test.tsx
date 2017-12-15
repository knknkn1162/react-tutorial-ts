import * as React from 'react';
import * as enzyme from 'enzyme';
import Square from './Square';
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it('Todo test', () => {
  const hello = enzyme.shallow(
    <Square 
      value={'hello'}
      onClick={() => {return;}}
    />,
  );

  expect(hello.find('.square').text()).toEqual('hello');
});
