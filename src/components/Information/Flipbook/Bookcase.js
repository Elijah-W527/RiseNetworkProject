import React, { useState, useRef, Button } from 'react';
import "../../../styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import useDocs from '../../../hooks/useDocs';

const Book = () => {

  //   const [checkout, setCheckOut] = useState(false);
  // //   const emailRef = useRef()
  // //   const passwordRef = useRef()
  // //   const [error, setError] = useState('');
  // //   // const [loading, setLoading] = useState(false);
  // //   const history = useHistory();
  const { docs } = useDocs('purchases');
  const purchasedBook = docs ? docs.relationships101 : false;
  //   console.log(purchasedBook);
  // {docs.relationships101 && history.push('/purchase-book')}

  return (
    <>

      {/* {!auth.currentUser && history.push('/login')} */}

      <div className="clouds">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="mx-auto text-center">
              <h2 className="title text-light h1 my-2">Welcome to the Rise Network Bookcase.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-5 pt-5 h-100" style={{ height: "100vh" }}>
        <div className="container">


          <div className="text-center">

            <p>To access the book please click the <b> Read Now  </b> button.</p>
            {purchasedBook ?
              <div className="text-center">
                {/* <br/>
                              <p>Your Book login information is below:</p>
                              <br/>
                              <p><b>Username:</b> rise </p>
                              <p><b>Password:</b> therisenetwork </p>
                              <br/> */}
                <a href="https://risenetwork.net/books">
                  <button type="button" href="risenetwork.net/books" className="btn btn-primary">Read Now</button>
                </a>
                <div className="row no-gutters pt-4 ">
                </div>

                {/* <p
                              style={{fontSize: 30}}
                              >
                                <b>Please save this page for future use</b> </p> */}
              </div>
              :
              <div className="text-center">
                <p>If you have not purchased the book you will not have access.</p>
                <p>Please go to our <b> Bookstore  </b> to get access.</p>
                <a href="/bookstorepay">
                  <button type="button" href="/bookstore" className="btn btn-primary">Go To Book Store</button>
                </a>
              </div>
            }
            {/*
                        <br/>
                        <a href="https://flipbook.risenetwork.net">
                          <button type="button" href="flipbook.risenetwork.net" className="btn btn-primary"
                          >Read Now</button>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/bookstore">
                            <button type="button" href="/bookstore" className="btn btn-primary">Go To Book Store</button>
                          </a>
                        */}
          </div>
        </div>




        {/* } */}
      </div>

    </>


  )
}

export default Book;
