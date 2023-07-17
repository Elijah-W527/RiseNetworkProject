import React, { useState, useRef } from 'react';
import "../../../styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../../contexts/AuthContext';
import PayPal from "./PayPal";
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import ReactPlayer from "react-player"


const PurchaseBook = () => {

  const [checkout, setCheckOut] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const history = useHistory();


  return (
    <>
      {/* {!auth.currentUser && history.push('/login')} */}

      <div style={{ backgroundColor: '#2c2c2c' }} > 
        <div className="text-center">
          <p
            className="h1 pt-4 pb-3 "
            style={{ color: '#eb6347' }}

          > <b>THE CHOICES YOU MAKE CAN CHANGE THE STORY OF YOUR LIFE</b></p>
        </div>



        <div style={{ backgroundColor: '#cc9901' }} >
          <div className="row no-gutters pt-4 ">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md">
              <img className="Cover" src="https://risenetwork.net/storage/app/media/book front.png"
                  alt="Front Cover" />
              </div>
              <div className="col-md">
              <img className="Cover " src="https://risenetwork.net/storage/app/media/Back Cover Final (1).png"
                  alt="Back Cover" />
              </div>
            </div>
          </div>


          <div className="row no-gutters pt-4 ">
          </div>
          
        </div>
      </div>

      


        <div className="bg-secondary h-100">
          <div className="row no-gutters pt-3 ">
          </div>
          <div className="text-center">
            <p
              style={{ color: 'white', fontSize: 30  }}
            >E-book Discount Price: $10</p>

            {checkout ?

              <PayPal />
              :
              <button
                onClick={() => {
                  setCheckOut(true);
                }}
                className="glass"
                style={{ width: 150, height: 55}}
              >
                Buy Now

              </button>
            }


            {/* {currentUser ?
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="DRSE8HFHQ6ED6" />
                            <input type="image"src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                          </form>
                        :
                          <a href = "/login" className = "btn btn-primary p-2 pl-3 pr-3">Sign In</a>
                        } */}



            <div className="row no-gutters pt-4 ">
            </div>

          </div>

        </div>
    </>
  )
}

export default PurchaseBook;
