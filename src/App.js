import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/Home';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path="/item/:id" component={ItemPage} />
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
