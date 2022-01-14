import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kofi's Fib Calculator on GKE!!!</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Routes>
        <Route exact path='/' element={<Fib/>}/>
        <Route path='/otherpage' element={<OtherPage/>}/>

        </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
