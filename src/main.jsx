import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='d-flex flex-column'>
      <Router>
        <Header />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </Router>
    </div>
  </React.StrictMode>,
)
