import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { shallow } from 'enzyme';
import ThemeSwitcher from "./ThemeSwitcher";



// For userEvent --- we need RTL 
describe('ThemeSwitcherComp [RTL]', () => {
  
  it('has toggling theme button', () => {
    render(<ThemeSwitcher />);
    const themeSwitchBtn = screen.getByRole('button');
    userEvent.click(themeSwitchBtn);
    expect(screen.getByText(/Current Theme/i)).toHaveTextContent(/dark/i);
  })
});


describe('ThemeSwitcherComp [Enzyme]', () => {

  it('should have para tag', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p')).toBeTruthy();
    expect(wrapper.find('p').text()).toBe('Current Theme: light');
  });

  it('should have a div element with only one h2 inside', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('has button that switches theme properly when clicked', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p').text()).toBe('Current Theme: light');
    
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('Current Theme: dark');

    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('Current Theme: light');
  });

  it('has no error displayed by default', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.containsMatchingElement(<div>Error Occured!</div>)).toBeFalsy();
  });

});