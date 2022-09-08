import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Two from './components/Two'
import About from './components/About'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/two' element={<Two />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
