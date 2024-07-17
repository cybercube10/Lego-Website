import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Catalogue from './components/Catalogue'
import Cart from './components/Cart'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /><Generator /></>} />
        <Route path='/catalogue' element={<Catalogue />} />  
        <Route path='/cart' element={<Cart/>} />  
      </Routes>
      <Footer />
    </main>
  </Router>
  )
}

export default App
