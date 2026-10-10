import { Route, Routes } from 'react-router-dom'
import './App.css'
import StoreLayout from './layouts/StoreLayout'
import HomePage from './pages/Home/HomePage'

function App() {


  return (
    <>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path='/' element={<HomePage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
