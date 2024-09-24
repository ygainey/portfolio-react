import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import './mediaqueries.css'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;