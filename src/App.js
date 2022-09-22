import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Counter from './components/Counter/Counter';
import Posts from './components/Posts/Posts';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import Reminders from './components/Reminders/Reminders';
import Movies from './containers/Movies';
import { AuthContext } from './contexts/AuthContext';
import MyProfile from './components/MyProfile/MyProfile';


function App() {

  const auth = {
    isLoggedIn: true,
    username: 'johnw',
    fullName: 'John Williams',
    lastLogin: '22/Sep/2022'
  }

  const movieInfo = {
    id: 342342,
    name: 'Jurassic Park',
    url: 'https://www.imdb.com/title/tt0107290/'
  }

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <h1>Welcome to Unit Testing!</h1>
        <hr />
        <SocialMedia name="Instagram" followersCount="1M"/>

        <hr/>
        <Counter />

        <hr/>
        <ContactForm />

        <hr/>
        <Movies {...movieInfo}/>

        <hr/>
        <Todos />

        <hr/>
        <Users />

        <hr />
        <Posts />

        <hr />
        <Reminders />

        <hr/>
        <MyProfile />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
