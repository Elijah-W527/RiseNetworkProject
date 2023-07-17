import '../../styles/Header.css'
import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import Notifications from '../Profiles/Notifications';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {

    const [open, setOpen] = useState(false);
    const { currentUser, logout, purchasedBook } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    // console.log(currentUser);
    var boughtBook = false;
    // const { docs } = useDocs('profiles');

    const handleLogout = async () => {
        setError('');
        try {
            await logout();
            history.push('/login')
        } catch {
            setError('Failed to log out');
        }
    };

    return (
        <Navbar expand = 'lg' variant='dark'>
            <div className = "container">
                <Link to = "/" className="navbar-brand">
                    <img id = "brand" src = "https://risenetwork.net/storage/app/media/logo.png"
                        alt = "Rise Network logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' onClick = {() => setOpen(!open)} />
                <Navbar.Collapse in = {open} className = "justify-content-stretch">
                    <ul className="navbar-nav ml-auto" onClick = {() => open ? setOpen(false) : null}>
                        <li className="nav-item">
                            {currentUser &&<Link className = "nav-link" to = "/home">Home</Link>}
                        </li>
                        <li className="nav-item" styles = "">
                            {!currentUser && <Link className = "nav-link" to = "/">Welcome</Link>}
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to = "/subscription">Subscribe</Link>
                        </li>
                        {/*
                        <li className="nav-item">
                            <Link className = "nav-link" to = "/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to = "/livestream">Livestream</Link>
                        </li>
                        */}
                        {currentUser ?
                        <li className="nav-item">
                            <Link className = "nav-link" to = "/search">Search</Link>
                        </li>
                        :
                        <div></div>
                        }
                        {currentUser ?
                        <li className="nav-item">
                            <Link className = "nav-link" to = "/bookcase">Bookcase</Link>
                        </li>
                        :
                        <div></div>
                        }

                        
                        {currentUser ?
                          <li className="nav-item">
                              <Link className = "nav-link" to = "/bookstorepay">Bookstore</Link>
                          </li>
                          :
                          <li className="nav-item">
                              <Link className = "nav-link" to = "/bookstore">Bookstore</Link>
                          </li>
                        } 

                        
                         {/* <li className="nav-item">
                            <Link className = "nav-link" to = "/videos">Videos</Link>
                        </li> */}
                        

                        <li className="nav-item">
                            <Link className = "nav-link" to = "/advertise">Advertise</Link>
                        </li>
                        {currentUser ?
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Account
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="/user-redirect">Your Profile</a>
                              <a className="dropdown-item" href="/dashboard">Update Account</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" onClick = {handleLogout}>Log out</a>
                            </div>
                          </li> :
                          <li className="nav-item">
                              <Link className = "nav-link" to = "/dashboard">Login</Link>
                          </li>
                        }
                        <li className="nav-item">
                            {currentUser && <Notifications />}
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header;
