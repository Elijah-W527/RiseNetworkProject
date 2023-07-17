import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import User from './Profiles/User';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Account from './Account';
import Home from './Information/Home';
import Subscription from './Information/Subscription'
import Advertise from './Information/Advertise'
import Events from './Information/Events'
import Books from './Information/Books/Books'
import Feed from './Feed';
import UpdateProfile from './Profiles/UpdateProfile';
import UserRedirect from "./Account/UserRedirect";
import NetworkBooks from "./Network/Books";
import Film from "./Network/Film";
import Music from "./Network/Music";
import TV from "./Network/TV";
import Dashboard from "./Network/Dashboard";
import Search from './Profiles/Search';
import Livestream from './Network/Livestream/Livestream';
import LivestreamNoZoom from './Network/Livestream/LivestreamNoZoom';
import BookstorePay from './Information/Flipbook/BookstorePay';
import Book from './Information/Flipbook/Book';
import Bookcase from './Information/Flipbook/Bookcase';
import Bookstore from './Information/Flipbook/Bookstore';
import SignupNonSub from './Account/SignupNonSub.js';
import LoginNonSub from './Account/LoginNonSub.js';
import Videos from './Information/Flipbook/Videos.js';

const Routing = (location) => {
  return (
    <Router>
      <Header />
      <Route render={() => (
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Account} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Account} />
          <Route path="/login" component={Account} />
          <Route path="/forgot-password" component={Account} />
          <Route path="/advertise" component={Advertise} />
          <Route path="/home" component={Feed} />
          <Route path="/subscription" component={Subscription} />
          {/* <Route path ="/events" component = {Events}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/network" exact component={Dashboard} />
          <Route path="/network-books" component={NetworkBooks} />
          <Route path="/network-film" component={Film} />
          <Route path="/network-music" component={Music} />
          <Route path="/network-TV" component={TV} />
          <PrivateRoute path="/search" component={Search} />
          {/* <Route path="/livestream" component={Livestream}/> */}
          {/* <Route path="/livestream-no-zoom" component={LivestreamNoZoom}/> */}
          <Route path="/bookstorePay" component={BookstorePay} />
          <Route path="/book" component={Book} />
          <PrivateRoute path="/bookcase" component={Bookcase} />
          <Route path="/bookstore" component={Bookstore} />
          <Route path="/signupnonsub" component={SignupNonSub} />
          <Route path="/loginnonsub" component={LoginNonSub} />
          <Route path="/videos" component={Videos} />
          <PrivateRoute path="/user-redirect" component={UserRedirect} />      
          <Container>
            <PrivateRoute path ="/books" component = {Books}/>
            <Route path="/user/:username" component={User} />
          </Container>
          
        </Switch>
        
      )} /> 
      {location.pathname !== "/" && <Footer/>}
        </Router>
  )
};


export default Routing;
