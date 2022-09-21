import { render, screen } from "@testing-library/react";
import mockFetch from "../../mocks/Posts/mockFetch";
import Posts from "./Posts";

describe('PostsComponent', () => {
  
  // setting up 
  beforeEach( () => {
    // prepare to attach a spy
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
  });

  // tearing down
  afterEach( () => {
    jest.resetAllMocks();
  });
  
  it('renders blog posts properly [SPY]', async() => {

    render(<Posts />);

    expect(await screen.findByText(/first post/)).toBeInTheDocument();
    expect(await screen.findByText(/second post/)).toBeInTheDocument();  
  });
  

});