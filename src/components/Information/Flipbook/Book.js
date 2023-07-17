import React, { useState, useRef, Button } from 'react';
import "../../../styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import useDocs from '../../../hooks/useDocs';

const Book = () => {

  const [checkout, setCheckOut] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { docs } = useDocs('purchases');
  const purchasedBook = docs ? docs.relationships101 : false;
  console.log(purchasedBook);
// {docs.relationships101 && history.push('/purchase-book')}

    return (
        <>
            {!auth.currentUser && history.push('/login')}
            <div className = "bg-white pb-5 pt-5 h-100" style={{height: "100vh"}}>
                <div className = "container">
                { purchasedBook ?
                    <div className = "text-center">
                        <p className = "text-dark h2 pt-5 pb-5">Thank you for supporting the Rise Network!</p>
                        <p>Your Book login information is below.</p>
                        <br/>
                        <p><b>Username:</b> rise </p>
                        <p><b>Password:</b> therisenetwork </p>
                        <br/>
                        <a href="https://flipbook.risenetwork.net">
                          <button type="button" href="flipbook.risenetwork.net" className="btn btn-primary">Read Now</button>
                        </a>
                        <div className = "row no-gutters pt-4 ">
                        </div>
                      </div>
                        :
                        <div className = "text-center">
                          <a href="/bookstore">
                            <button type="button" href="/book-store" className="btn btn-primary">Purchase Book</button>
                          </a>
                        </div>
                    }
                </div>
            </div>
        </>


    )
}

export default Book;
