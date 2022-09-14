import './App.css';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {

  return (
    <div className="App">
      <h1>Welcome to Unit Testing!</h1>
      <hr />
      <SocialMedia name="Instagram" followersCount="1M"/>
    </div>
  );
}

export default App;
