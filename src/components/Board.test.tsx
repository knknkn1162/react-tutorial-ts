import * as React from 'react';
import * as enzyme from 'enzyme';
import Board from './Board';
import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it('Todo test', () => {
  const hello = enzyme.shallow(
    <Board 
      squares={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']}
      onClick={(i: number) => {return;}}
    />,
  );
  expect(hello.find('.board-row')).toHaveLength(3);
  expect(hello.find('.board-row').at(0).find('Square')).toHaveLength(3);
  expect(hello.find('.board-row').at(0).find('Square').at(0).props().value).toEqual('a');
  expect(hello.find('.board-row').at(1).find('Square').at(0).props().value).toEqual('d');
  
});
