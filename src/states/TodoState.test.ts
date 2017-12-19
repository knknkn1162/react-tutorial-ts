import * as React from 'react';
import * as enzyme from 'enzyme';
import {generateTodos} from './TodoState';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("test generateTodos", () => {
  expect(generateTodos(["hello", "goodbye"]))
    .toEqual([
      {id: 0, completed: false, text: "hello"},
      {id: 1, completed: false, text: "goodbye"}
    ]);
});
