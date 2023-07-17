import React from 'react';
import Sidebar from "./Sidebar";
import './Network.css';
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'

const containerStyle = {
  position: 'relative',
  color: 'white',
  textAlign: 'center',
};

const centeredStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 50%)'
};

function Dashboard(props) {
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
                      {/* <img src="https://i.imgur.com/WtCrKK5.png" alt="banner" style={{width:"100%"}}></img> */}
                      <h1 style={centeredStyle}>Dashboard</h1>
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
                </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Dashboard;
