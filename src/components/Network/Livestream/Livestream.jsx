import React from 'react';
import "../../../styles/App.css"

import { Button } from 'react-bootstrap';

const Livestream = () => {
    return (
        <>
            <div className = "grey bg-dark">
                <div className="container p-5">
                    <div className="row pt-30 justify-content-center align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className = "title text-light h1 my-2">Join us on Zoom:</h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className = "bg-dark p-5">
                <div className = "container">
                  <div className="iframe-container" style={{overflow: 'hidden', paddingTop: '56.25%', position: 'relative'}}>
                    <iframe allow="microphone; camera" style={{border: '0', height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}} src="https://zoom.us/j/91401937143" frameBorder="0"></iframe>
                  </div>
                  <div className="mx-auto text-center">
                    <br />
                    <a className = "h3 title text-light text-center my-2" href="/livestream-no-zoom">To Watch Live Stream Without Joining Zoom Click here</a>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Livestream;
