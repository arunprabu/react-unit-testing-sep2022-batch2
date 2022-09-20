import { render, screen, waitFor } from "@testing-library/react";
import { fetchAPI } from "../../utils/fetchAPI";
import Users from "./Users";

jest.mock('../../utils/fetchAPI'); //Mocks a module with an auto-mocked version when it is being required.

describe('UsersComponent', () => {
 
  it('renders Users comp properly with api data [MOCKING]', async() => {
    // here's the mock data
    // as the n/w call will get data after sometime, this logic should also have async await
    // instead we can mock here. 
    // MOCKING ONLY SUCCESS API CALL.
    const userList = [{
      id: 1, 
      name: 'John',
      phone: 352543
    }, {
      id: 2,
      name: 'Steve',
      phone: 6896786
    }];

    fetchAPI.mockResolvedValue(userList);
    render(<Users />);
    
    expect(await screen.findByText(/John/i)).toBeInTheDocument();    
    expect(await screen.findByText(/352543/i)).toBeInTheDocument();    
    expect(await screen.findByText(/Steve/i)).toBeInTheDocument();    
    expect(await screen.findByText(/6896786/i)).toBeInTheDocument();   
  });

  // negative test spec
  it('renders error in users comp when API throws error [MOCKING]', async() => {
    fetchAPI.mockRejectedValue('')
    render(<Users />);
    expect(await screen.findByText(/Some error occured! Try again later./i)).toBeInTheDocument();
  });


})