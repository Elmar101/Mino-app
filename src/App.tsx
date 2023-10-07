import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
 
  

  return (
    <div className="App">
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
