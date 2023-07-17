import React from 'react';
import Signup from './Account/Signup';
import { Route } from 'react-router-dom';
import Dashboard from './Account/Dashboard';
import Login from './Account/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './Account/ForgotPassword';
import styles from './Account.module.css'

function Account() {
    

  return (  
        <div className={"d-flex align-items-center justify-content-center " + styles.limitHeight}>
            <div className={"w-100 " + styles.widthLimit}>
            <PrivateRoute path ="/dashboard" component={Dashboard} />
            <Route path = "/signup" component = {Signup} />
            <Route path = "/login" component = {Login} />
            <Route path = "/forgot-password" component = {ForgotPassword} />
            </div>
        </div>    
  )
}

export default Account;
