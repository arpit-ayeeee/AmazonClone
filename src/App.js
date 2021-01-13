import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App(){
  const[ {}, dispatch] = useStateValue();
    useEffect(() => {
    //Will only run once when the app component loads, once one user is logged in
      auth.onAuthStateChanged(authUser => {
        console.log('The user is  >> ', authUser);
        if(authUser){
          //The user logged in
          dispatch({    //We'll add the use to the storage
            type: "SET_USER",
            user: authUser
          })
        }
        else{
          //The user is logged out
          dispatch({    //We'll send null this time
            type: "SET_USER",
            user: null
          })
        }
      })
    }, [])
    return (
      <Router>
        <div className="app">
          
          <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/checkout">
                <Header />
                <Checkout />
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
