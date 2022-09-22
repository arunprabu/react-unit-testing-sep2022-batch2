import React from 'react'
import Movies from '../../containers/Movies'
import ContactForm from '../ContactForm/ContactForm'
import Counter from '../Counter/Counter'
import MyProfile from '../MyProfile/MyProfile'
import Posts from '../Posts/Posts'
import Reminders from '../Reminders/Reminders'
import SocialMedia from '../SocialMedia/SocialMedia'
import Todos from '../Todos/Todos'
import Users from '../Users/Users'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'

const Home = () => {

  const movieInfo = {
    id: 342342,
    name: 'Jurassic Park',
    url: 'https://www.imdb.com/title/tt0107290/'
  }

  return (
    <div>
      <h1>Welcome to Unit Testing!</h1>

      <hr />
      <SocialMedia name="Instagram" followersCount="1M" />

      <hr />
      <Counter />

      <hr />
      <ContactForm />

      <hr />
      <Movies {...movieInfo} />

      <hr />
      <Todos />

      <hr />
      <Users />

      <hr />
      <Posts />

      <hr />
      <Reminders />

      <hr />
      <MyProfile />

      <hr/>
      <ThemeSwitcher />
    </div>
  )
}

export default Home