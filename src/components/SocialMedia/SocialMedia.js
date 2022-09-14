import React from 'react'

const SocialMedia = ({name, followersCount}) => {

  return (
    <div>
      <h2>Social Media</h2>
      <h3>Testing Props and JSX</h3>
      <p>Top Social Media: </p>
      <p data-testid="topMediaInfo">{name} with {followersCount} Followers</p>
    </div>
  )
}

export default SocialMedia