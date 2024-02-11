import React from 'react'
import SignUp from './pages/Auth/SignUp'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import Sidebar from './pages/SideBar/Sidebar'
import SingleAuthor from './pages/Author/SingleAuthor'
import SingleBook from './pages/Books/SingleBook'
import Main from './pages/Menu/Main'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path="main" element={<Main />}/>
        <Route path='sidebar' element={<Sidebar/>}/>
        <Route path='single__book/:id' element={<SingleBook/>}/>
        <Route path='single__author/:id' element={<SingleAuthor/>}/>
      </Routes>
    </div>
  )
}

export default App
