import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import jwtDecode from 'jwt-decode';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const { iat, ...decoded } = jwtDecode(token);
      dispatch({
        type: 'SET_USER',
        user: decoded,
      });
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
