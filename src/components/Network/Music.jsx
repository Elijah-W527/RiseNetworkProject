import React from 'react';
import Sidebar from "./Sidebar";
import './Network.css';
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'

const containerStyle = {
  position: 'relative',
  color: 'white',
  textAlign: 'center'
};

const centeredStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 50%)'
};

function Music(props) {
    const history = useHistory();
    return (
      <>
        {!auth.currentUser && history.push('/login')}
        <div>
            <div style={{display: "flex", backgroundColor: "black"}}>
                <Sidebar history={props.history}/>
                <div style={{width: '100%'}}>
                <div>
                    <div style={containerStyle}>
                      <img src="https://risenetwork.net/storage/app/media/music_collage.jpg" alt="banner" style={{width:"100%", opacity: 0.7}}></img>
                      <h1 style={centeredStyle}>Music</h1>
                    </div>
                    <div className="grid">
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                      </div>
                      <div className="shelf"></div>
                      <div className="grid">
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                      </div>
                      <div className="shelf"></div>
                      <div style={containerStyle}>
                        <img src="https://risenetwork.net/storage/app/media/rap_r&b.jpg" alt="banner" style={{width:"100%", opacity: 0.7}}></img>
                        <h1 style={centeredStyle}>Rap and R&B</h1>
                      </div>
                      <div className="grid">
                          <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                          <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                          <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                      </div>
                      <div className="shelf"></div>
                      <div className="grid">
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                        <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" className="img-responsive book"></img></a>
                    </div>
                    <div className="shelf"></div>
                    <div style={containerStyle}>
                      <img src="https://i.imgur.com/WtCrKK5.png" alt="banner" style={{width:"100%", opacity: 0.7}}></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Music;
