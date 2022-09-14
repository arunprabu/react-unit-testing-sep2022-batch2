import { render, screen } from "@testing-library/react";
import SocialMedia from "./SocialMedia";

// group of related test specs -- TEST SUITE
describe('SocialMediaComponent', () => {
  
  // both 'it' and 'test' are same
  it('receives props such as name and followersCount correctly', () => {
    render(<SocialMedia name='Instagram' followersCount='200K'/>);

    const topMediaInfoEl = screen.getByTestId('topMediaInfo');
    expect(topMediaInfoEl.textContent).toBe('Instagram with 200K Followers');
  });

});