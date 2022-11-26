import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/product' element = {<Product />} />
      <Route path='/productlist' element = {<ProductList />} />
      <Route path='/register' element = {<Register />} />
    </Routes>
  )
}

export default App