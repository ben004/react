import React, { useState, useRef, useEffect } from 'react';
import TodoList from './ReferList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.lists'

function App() {
  const [lists, setTodos] = useState([])
  const todoName = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
  }, [lists])

  function toggleTodo(id) {
    const newTodos = [...lists]
    const list = newTodos.find(todo => todo.id === id)
    list.complete = !list.complete
    setTodos(newTodos)
  }

  function handleAddTodo(event) {
    const name = todoName.current.value
    if(name === '') 
      return
    setTodos(prevtodos => {
      return [...prevtodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoName.current.value = null
  }

  function handleClearTodos() {
    const newTodos = lists.filter(list => !list.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <h1> My first react project </h1>
    <TodoList lists={lists} toggleTodo={toggleTodo}/>
    <input ref={todoName} type="text" />
    <button onClick={handleAddTodo}>Add toList</button><br/>
    <button onClick={handleClearTodos}>Clear Selected item</button>
    <div>{lists.filter(list => !list.complete).length} Remaining here</div>
    </>
  )
}

export default App;
