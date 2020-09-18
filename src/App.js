import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Frontpage from './Components/frontpage/frontpage';
import Header from './Components/Header/Header';
import Showdetails from './Components/Showdetails/Showdetails';
// import fakedata from './Components/BookNow/Fakedata'
import Details from './Components/Details/Details'
import Login from './Components/Login/Login'
import Nomatch from './Nomatch/Nomatch';
import Registration from './Components/REgistration/Registration';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Frontpage></Frontpage>
        </Route>
        <Route path="/frontpage">
          <Frontpage></Frontpage>
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
        <Route path="/Showdetails/:proKey">
          <Showdetails></Showdetails>
        </Route>
        <Route path="/Details">
          <Details></Details>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/Registration">
          <Registration/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>
    </Router>
      );
}

export default App;
