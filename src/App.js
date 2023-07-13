import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/' element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
