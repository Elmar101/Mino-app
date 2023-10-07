import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

function App() {
 
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
