import React, { useEffect, useState } from 'react'

const Posts = () => {

  const blogPostStyle = {
    backgroundColor: '#eee'
  }

  const [postList, setPostList ] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then( (res)=> {
        return res.json();
      })
      .then((resInJSON) => { 
        setPostList(resInJSON);
      })
      .catch( (err)=> {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h2>Posts | Jest Spy</h2>
      {
        postList.map( (post) => {
          return( 
            <div key={post.id} style={blogPostStyle} >
              <p>#{post.id}</p>
              <p data-testid='postTitle'>{post.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts