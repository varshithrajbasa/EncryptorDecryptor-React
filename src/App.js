import './App.css';
import Header from './Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div  className="App-header">
      <BrowserRouter>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route>
      <h1>404Not FOund..!</h1>
    </Route>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
