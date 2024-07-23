import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import AllProducts from './Components/AllProducts'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/allproducts' element={<AllProducts/>}/>
    </Routes>
    </>
  )
}

export default App