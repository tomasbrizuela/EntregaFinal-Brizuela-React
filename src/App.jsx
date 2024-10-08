import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/NavBar/Navbar.jsx'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import CartContainer from './components/pages/cart/CartContainer.jsx'
import ProductDetailContainer from './components/common/ProductDetail/ProductDetailContainer.jsx'

function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/products/:id' element={<ProductDetailContainer />} />
        <Route path='/' element={<h1>This is the home</h1>} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='*' element={<h1>Error obtaining the page data! <Link to={'/'}>Go back to Home!</Link></h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
