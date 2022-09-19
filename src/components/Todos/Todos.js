import React, { useEffect, useState } from 'react'

const Todos = () => {

  const todosAPI = 'https://jsonplaceholder.typicode.com/todos?_limit=4';

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async() => {
      const res = await fetch(todosAPI);
      const resInJSON = await res.json();
      console.log(resInJSON);

      setTodoList(resInJSON);
    }
    fetchTodos();
  }, [])
  
  return (
    <div>
      <h2>Todos | Testing REST API Data</h2>
      {
        todoList.map( (todo) => {
          return(
            <div key={todo.id} style={{borderBottom: 'solid 1px #ccc'}}>
              <p>#{todo.id}</p>
              <h3>{todo.title}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Todos