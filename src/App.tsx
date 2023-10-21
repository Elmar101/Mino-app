import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainRouter from './routers/MainRouter';

function App() {
 
  return (
    <div className="App">
      <Header />
      <hr/>
      <MainRouter/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
