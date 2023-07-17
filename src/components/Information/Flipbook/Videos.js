import React, { useState, useRef } from 'react';
import "../../../styles/App.css"
import { Link, useHistory } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed';


const Videos = () => {

  const [checkout, setCheckOut] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  const history = useHistory();


  return (
    <>
      {/* {!auth.currentUser && history.push('/login')} */}

      <div className="bg-secondary h-100">
        <div className="text-center">
          <p
            className="h1 pt-4 pb-3 "
            style={{ color: 'white' }}

          > <b>THE CHOICES YOU MAKE CAN CHANGE THE STORY OF YOUR LIFE</b></p>
        </div>

        <div style={{ backgroundColor: '#cc9901' }}>
          <div className="row no-gutters pt-4 ">
          </div>
          <div className="row no-gutters pt-4 ">
          </div>
          <div className="container">
            <div className="text-center">
              <video controls data-title="How Does Love Go From Wholesome To Toxic" className="iframe-container" onpause="sendEvent('Pause', this)" onplay="sendEvent('Play', this)" onended="sendEvent('Ended', this)">
                <source src="https://risenetwork.net/storage/app/media/How Does Love Go From Wholesome To Toxic_.mov" type="video/mp4"/>
              </video>
              <div className="row no-gutters pt-4 ">
              </div>


              <video controls data-title="What Are The Next Steps After The Honeymoon" className="iframe-container" onpause="sendEvent('Pause', this)" onplay="sendEvent('Play', this)" onended="sendEvent('Ended', this)">
                <source src="https://risenetwork.net/storage/app/media/What Are The Next Steps After The Honeymoon_.mov" type="video/mp4"/>
              </video>
              <div className="row no-gutters pt-4 ">
              </div>


              <video controls data-title="Do You Have Unresolved Issues With Others" className="iframe-container" onpause="sendEvent('Pause', this)" onplay="sendEvent('Play', this)" onended="sendEvent('Ended', this)">
                <source src="https://risenetwork.net/storage/app/media/Do You Have Unresolved Issues With Others_.mp4" type="video/mp4"/>
              </video>
              <div className="row no-gutters pt-4 ">
              </div>


              <video controls data-title="Where Did The Spark That Brought You Together Go" className="iframe-container" onpause="sendEvent('Pause', this)" onplay="sendEvent('Play', this)" onended="sendEvent('Ended', this)">
                <source src="https://risenetwork.net/storage/app/media/Where Did The Spark That Brought You Together Go_ .mov" type="video/mp4"/>
              </video>
              <div className="row no-gutters pt-4 ">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Videos;
