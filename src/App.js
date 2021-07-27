import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
//pages
import HomePage from './pages/Homepage'
import SinglePage from './pages/SinglePage'
import AboutPage from './pages/Aboutpage'

function App() {
  return (
   < Router>
        <Navbar />  
          <div className="container">
          <Switch>
           <Route exact path ="/" component={HomePage} />
           <Route exact path ="/about" component = {AboutPage} />
           <Route  path ="/singleshow/:id" component = {SinglePage} />
          </Switch>
          
          </div>
  </Router>
  );
};

export default App;
