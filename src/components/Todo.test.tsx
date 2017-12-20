import * as React from 'react';
import * as enzyme from 'enzyme';
import Todo from './Todo';
import * as sinon from 'sinon';

import * as Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe('renders', () => {
    it("renders text when completed=true", () => {
      const wrapper = enzyme.shallow(<Todo completed={true} text="hello" onClick={()=>{return;}}/>);

      expect(wrapper.find("li").text()).toEqual("hello");
      expect(wrapper.find("li").props().style.textDecoration).toEqual("line-through");
    });

    it("renders text when completed=false", () => {
      const wrapper = enzyme.shallow(
        <Todo 
          completed={false} 
          text="hello" 
          onClick={()=>{return;}}
        />
      );

      expect(wrapper.find("li").text()).toEqual("hello");
      expect(wrapper.find("li").props().style.textDecoration).toEqual("none"); 
    });
});

describe('event', () => {
  it("test onClick", () => {
    const onClick = sinon.spy();
    const wrapper = enzyme.shallow(<Todo completed={true} text="hello" onClick={onClick}/>);

    wrapper.find("li").simulate("click");

    expect(onClick.callCount).toEqual(1);
  });
});