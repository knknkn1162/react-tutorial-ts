import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList, {TodoState,generateTodos} from './TodoList';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it("renders text when completed=true", () => {
  const onDummy = (id: number) => {return;};
  const todos: Array<TodoState> = generateTodos(["hello", "goodbye"]);

  expect(todos).toEqual([
    {id: 0, completed: false, text: "hello"},
    {id: 1, completed: false, text: "goodbye"},
  ])

  const hello = enzyme.shallow(<TodoList todos={todos} onTodoClick={onDummy}/>);

  expect(hello.find("Todo")).toHaveLength(2);
  expect(hello.find("Todo").at(0).html()).toEqual('<li style="text-decoration:none">hello</li>');
});