import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import SocialMedia from "./SocialMedia";

// group of related test specs -- TEST SUITE
describe('SocialMediaComponent', () => {
  
  // both 'it' and 'test' are same
  it('receives props such as name and followersCount correctly', () => {
    render(<SocialMedia name='Instagram' followersCount='200K'/>);

    const topMediaInfoEl = screen.getByTestId('topMediaInfo');
    expect(topMediaInfoEl.textContent).toBe('Instagram with 200K Followers');
  });

  it(`has an input element with placeholder 'Enter Country'`, () => {
    render(<SocialMedia />);
    const countryInputEl = screen.getByPlaceholderText('Enter Country');
    expect(countryInputEl).toBeTruthy();
  });

  // testing if input el works with onChange event or not
  it('should update country on change event', () => {
    render(<SocialMedia />);

    // find the element in which you have onChange event
    // text boxes will have default role as textbox
    const countryInputEl = screen.getByRole('textbox', { name: 'Enter Country Name'});

    // having mock event obj 
    const mockEvtObj1 = {
      target: {
        value: 'Australia'
      }
    }
    // trigger / emit / fire the event thru pgm 
    fireEvent.change(countryInputEl, mockEvtObj1);
    expect(countryInputEl.value).toBe('Australia');
    expect(screen.getByRole('paragraph').textContent).toBe('Visit Cognizant Australia website to know more')

    const mockEvtObj2 = {
      target: {
        value: 'Japan'
      }
    }
    // trigger / emit / fire the event thru pgm 
    fireEvent.change(countryInputEl, mockEvtObj2);
    expect(countryInputEl.value).toBe('Japan');
    expect(screen.getByRole('paragraph').textContent).toBe('Visit Cognizant Japan website to know more')
  });

  it('has right SocialMedia comp snapshot', () => {
    // to take a snapshot we need react-test-renderer // npm i react-test-renderer@17.0.2
    // taking snapshot and also converting it to json.
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    const snapshotJSON = renderer.create(<SocialMedia name='Instagram' followersCount='200K'/>).toJSON();
    // let's assert with a matcher toMatchSnapshot() from jest
    expect(snapshotJSON).toMatchSnapshot();
  });

});