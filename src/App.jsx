import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import CartContainer from './components/pages/cart/CartContainer.jsx'
import ProductDetailContainer from './components/common/ProductDetail/ProductDetailContainer.jsx'
import FooterContainer from './components/layout/Footer/FooterContainer.jsx'
import { HomeContainer } from './components/pages/Home/HomeContainer.jsx'
import { CartContextProvider } from './Context/CartContext.jsx'
import NavbarContainer from './components/layout/NavBar/NavbarContainer.jsx'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter >
        <NavbarContainer />
        <Routes>
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ProductDetailContainer />} />
          <Route path='/' element={<HomeContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<h1>Error obtaining the page data! <Link to={'/'}>Go back to Home!</Link></h1>} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
