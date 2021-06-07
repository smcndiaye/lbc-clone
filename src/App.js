import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Footer from './components/Footer';
import AddAnnoce from './components/AddAnnoce';
function App() {
  return (
    
    <div className="app">
      <Router>
      <Header />
        {/* <Home /> */}
        
        <Route exact path="/" component={Home}/>
        <Route path='/deposer-annoce' component={AddAnnoce} />
        <Footer />
        </Router>
      </div>
       
  );
}

export default App;
