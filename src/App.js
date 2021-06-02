import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="app">
      <Header />
        <Home />
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
