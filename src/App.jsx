import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/add-task' element={<AddTask />} />
          <Route path='/add-list' element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
