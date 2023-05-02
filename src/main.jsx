import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='d-flex flex-column' style={{height:"100vh"}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About/>} />
          <Route path='Projects' element={<Projects/>} />
          <Route path='Contact' element={<Contact/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
    <App />
  </React.StrictMode>,
)
