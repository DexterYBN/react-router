import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { Contact } from './pages/Contact'
import './styles.css'

function App() {
  return (
    <>
      <header>
        <div className='cover'><h3 style={{ color: "white" }}>Cover</h3></div>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/Features">Features</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <footer>
        <p>Cover template for <Link to="/">Bootstrap</Link>, by <Link to="/">@mdo.</Link></p>
      </footer>
    </>
  );
}

export default App;
