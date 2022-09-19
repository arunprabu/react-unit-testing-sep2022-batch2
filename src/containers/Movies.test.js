import { fireEvent, render, screen } from "@testing-library/react";
import Movies from "./Movies";

describe('MoviesComponent', () => {

  // mock data -- prepared to be passed as props
  const movieInfo = {
    id: 767866,
    name: 'The Godfather',
    url: 'https://www.imdb.com/title/tt0068646/'
  }

  it('receives movie related props', () => {
    render(<Movies {...movieInfo} />);

    const movieLinkEl = screen.getByTestId('movieLink');
    expect(movieLinkEl).toHaveAttribute('href', 'https://www.imdb.com/title/tt0068646/');
  });
  
  it('manages subscription properly', () => {
    render(<Movies />);

    const subscribeBtn = screen.getByTestId('subscribeBtn');

    fireEvent.click(subscribeBtn);
    expect(subscribeBtn.textContent).toBe('Unsubscribe');
   
    fireEvent.click(subscribeBtn);
    expect(subscribeBtn.textContent).toBe('Subscribe');  
  });




});