import React, { useEffect } from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        console.log('authUser true')
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/login">
          <Login />
        </Route>
      <Header />
      <Switch>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
