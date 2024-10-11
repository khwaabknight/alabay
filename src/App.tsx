import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import GameDesc from './pages/GameDesc'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game/:id' element={<GameDesc/>}/>
      </Routes>
    </div>
  )
}


export default App
