

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Navbar from './components/Navbar'



function App() {


  return (

    <div className="px-5 sm:px[5vw] md:px[7vw] lg:px[9vw]">
        
    <Navbar/>
      <Routes>
            <Route path='/' element={<Home title='Home'/>} />
            <Route path='/about' element={<About/>} />

            <Route path="/contact" element={<Contact contactEmail='diptunazmulalam@gmail.com' phone='+8801845511689' address='House : 138, Road : 5, Block : B,Bashundhara R/A'/>} />
      </Routes>


    </div>

  )
}

export default App
