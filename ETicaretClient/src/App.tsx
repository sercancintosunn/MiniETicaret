import { Route, Routes } from 'react-router-dom'
import './App.css'
import StoreLayout from './layouts/StoreLayout'
import HomePage from './pages/Home/HomePage'
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetailPage from './pages/Products/ProductDetailPage'

function App() {


  return (
    <>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
