import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Counter from './components/Counter/Counter';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {

  return (
    <div className="App">
      <h1>Welcome to Unit Testing!</h1>
      <hr />
      <SocialMedia name="Instagram" followersCount="1M"/>

      <hr/>
      <Counter />

      <hr/>
      <ContactForm />
    </div>
  );
}

export default App;
