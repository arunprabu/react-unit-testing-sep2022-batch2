import React, { Component } from 'react'

class Movies extends Component {

  state = {
    isSubscribed: false
  }

  handleSubscription = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed
    })
  }

  render() {
    return (
      <div>
        <h2>Movies | Testing Class Comp</h2>

        <p>Movie Title: {this.props.name}</p>
        <a href={this.props.url} data-testid='movieLink'>Click to View More</a>
        
        {
          this.state.isSubscribed? 
          <p>You are a subscriber</p>
          :
          <p>You are not a subscriber</p>
        }
        
        <button type='button'
          data-testid='subscribeBtn' onClick={this.handleSubscription}>
          {
            this.state.isSubscribed? 
            'Unsubscribe'
            :
            'Subscribe'
          }
        </button>
      </div>
    )
  }
}

export default Movies;