import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const list = [
    {
      id: "task_1",
      title: "Task",
      description: "Read React 19 documentation"
    },
    {
      id: "task_2",
      title: "Task",
      description: "Create a Todo application"
    }
  ]

  return (
    <>
    <div>
      <TodoList initialTodos={list} />
    </div>
    </>
  )
}

export default App





