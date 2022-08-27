import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import Signup from './components/SignUp'
import { Box } from '@mui/material'
import Movies from './components/MainPage/Movies'

function App() {
  return (
    <Box>
     <Movies/>
    </Box>
  )
}

export default App
