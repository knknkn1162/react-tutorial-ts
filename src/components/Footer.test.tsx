import * as React from 'react';
import * as enzyme from 'enzyme';
import Footer from './Footer';
import * as sinon from 'sinon';
import * as Adapter from "enzyme-adapter-react-16";

import { VisibleType } from "../states/Filter";

enzyme.configure({ adapter: new Adapter() });


describe('renders', () => {
  it("renders Footers", () => {
    
    const wrapper = enzyme.shallow(
      <Footer 
        onLinkClick={(t: VisibleType)=> {return;}}
        filter={VisibleType.SHOW_ALL}
      />
    );

    expect(wrapper.find('ul>li')).toHaveLength(3);

    expect(
      wrapper.find('ul>li').map(w => w.find("Link").prop("active"))
    ).toEqual([true, false, false]);

    expect(
      wrapper.find('ul>li').map(w => w.find("Link").prop("children"))
    ).toEqual(["All", "Active", "Completed"]);
  });
});

describe('event', () => {
  it("LinkClick test", () => {
    const onLinkClick = sinon.spy();
    const wrapper = enzyme.shallow(
      <Footer 
        onLinkClick={onLinkClick}
        filter={VisibleType.SHOW_ALL}
      />
    );

    wrapper.find('ul>li>Link').at(0).simulate('click');
    expect(onLinkClick.callCount).toEqual(1);
    expect(onLinkClick.args[0]).toEqual([VisibleType.SHOW_ALL]);
  });
});
