import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import Contact from './components/pages/Contact'
import Documentation from './components/pages/Documentation'
import Achievment from './components/pages/achievment'
import Home from './components/pages/home'
import About from './components/pages/about'
import Member1 from './components/pages/member-1'
import Member2 from './components/pages/member-1'

function App() {
  return (
    <div>
      <section className='NavBar'>
      <Navbar />
      </section>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/achievment' element={<Achievment />} />
        <Route path='/about' element={<About />} />
        <Route path='/member1' element={<Member1 />} />
        <Route path='/member2' element={<Member2 />} />
      </Routes>

      </div>
  )
}

export default App
