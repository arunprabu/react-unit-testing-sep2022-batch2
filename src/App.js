import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Counter from './components/Counter/Counter';
import Posts from './components/Posts/Posts';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import Reminders from './components/Reminders/Reminders';
import Movies from './containers/Movies';


function App() {


  const movieInfo = {
    id: 342342,
    name: 'Jurassic Park',
    url: 'https://www.imdb.com/title/tt0107290/'
  }

  return (
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
    </div>
  );
}

export default App;
