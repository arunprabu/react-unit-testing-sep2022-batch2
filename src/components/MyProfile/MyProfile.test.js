import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../contexts/AuthContext";
import MyProfile from "./MyProfile"

describe('MyProfileComponent', () => {

  const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
      <AuthContext.Provider value={providerProps}>{ui}</AuthContext.Provider>,
      renderOptions,
    )
  }
  
  it('shows pls login when not receiving auth context', () => {
    render(<MyProfile />)
    expect(screen.getByText(/^Please login/)).toHaveTextContent(
      'Please login... You are not logged in to access profile information',
    )
  })

  
  it('receives data from context provider', () => {
    const auth = {
      isLoggedIn: true,
      username: 'johnw',
      fullName: 'John Williams',
      lastLogin: '22/Sep/2022'
    }
  
    render(
      <AuthContext.Provider value={auth}>
        <MyProfile />
      </AuthContext.Provider>
    );
    expect(screen.getByText(/^Name:/).textContent).toBe(
      'Name: John Williams'
    )
    expect(screen.getByText(/^Username:/).textContent).toBe(
      'Username: johnw'
    )
    expect(screen.getByText(/^Last Login:/).textContent).toBe(
      'Last Login: 22/Sep/2022'
    )
  })

  
  // another way
  it('receives auth info value from provider', () => {
    const providerProps = {
      isLoggedIn: true,
      username: 'johnw',
      fullName: 'John Williams',
      lastLogin: '22/Sep/2022'
    }
    customRender(<MyProfile />, {providerProps})
    expect(screen.getByText(/^Name:/).textContent).toBe(
      'Name: John Williams'
    )
    expect(screen.getByText(/^Username:/).textContent).toBe(
      'Username: johnw'
    )
    expect(screen.getByText(/^Last Login:/).textContent).toBe(
      'Last Login: 22/Sep/2022'
    )
  })
  

});
