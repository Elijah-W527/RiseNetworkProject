import React from 'react';
import "../../../styles/App.css"
import useScript from '../../../hooks/useScript';

import { Button } from 'react-bootstrap';

const LivestreamNoZoom = () => {
    useScript('https://risenetwork.net/storage/app/media/livestream_no_zoom.js');
    return (
        <>
            <div className = "grey bg-dark">
                <div className="container p-5">
                    <div className="row pt-30 justify-content-center align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className = "title text-light h1 my-2">Livestream</h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className = "bg-dark p-5">
                <div className = "container">
                  <div id="boxcast-widget-lbszpwaazclpmqbe4flu"></div></div>
                  <div className="mx-auto text-center">
                    <a className = "title text-light text-center my-2" href="/livestream">Return to watching on Zoom</a>
                  </div>
            </div>

            <div className = "bg-dark p-5">
            </div>
        </>
    )
}

export default LivestreamNoZoom;
