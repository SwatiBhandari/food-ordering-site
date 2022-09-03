import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Forgot_password from './Forgot_password';
import Reset_password from './Reset_password';
import { BrowserRouter as Router , Route, Switch }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Shree_Ram from './Shree_Ram';
import Ambika from './Ambika';
import Bhairav from './Bhairav';
import Bhaskar from './Bhaskar';
import Swsti from './Swsti';
import Sahil from './Sahil';
import Govind from './Govind';
import Filter from './Filter';
import Admin from './Admin';
import Orders from './components/Orders';
import Users from './components/Users';
import Payment from './Payment';
import 'bootstrap/dist/css/bootstrap.min.css';


export const SearchTermContext = createContext();

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    //will only run once when the app component loads....

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
    <div className="App">
      
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/forgot_password'>
          <Forgot_password />
        </Route>
        <Route exact path='/reset_password'>
          <Reset_password />
        </Route>
        <Route exact path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route exact path='/payment'>
          <Header />          
          <Payment />          
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path='/Ambika'>
          <Header />
          <Ambika />
        </Route>
        <Route exact path='/Shree_Ram'>
          <Header />
          <Shree_Ram />
        </Route>
        <Route exact path='/Bhairav'>
          <Header />
          <Bhairav />
        </Route>
        <Route exact path='/Bhaskar'>
          <Header />
          <Bhaskar />
        </Route>
        <Route exact path='/Swsti'>
          <Header />
          <Swsti />
        </Route>
        <Route exact path='/Sahil'>
          <Header />
          <Sahil />
        </Route>
        <Route exact path='/Govind'>
          <Header />
          <Govind />
        </Route>
        <Route exact path='/Admin'>
          <Admin />
        </Route>
        <Route exact path='/Orders'>
          <Orders />
        </Route>
        <Route exact path='/Users'>
          <Users />
        </Route>
        <Route exact path='/Filter'>
          <SearchTermContext.Provider value ={{ searchTerm, setSearchTerm }}>
            <Header />
            <Filter />
          </SearchTermContext.Provider>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
