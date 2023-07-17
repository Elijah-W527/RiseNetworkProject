import React from 'react';
import "../../styles/App.css";
import { useHistory } from 'react-router-dom'

export default function Login() {
  const history = useHistory();

    return (
        <>
            {/* {!auth.currentUser && history.push('/login')} */}
            <div className = "headerBlock bulletin">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className = "title text-light h1 my-2">Events</h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className = "bg-dark pb-5 h-100">
                <div className = "container">
                    <div className = "text-center">
                        <p className = "text-light h2 pt-5 pb-5">Check out our events</p>
                          <img src="https://risenetwork.net/storage/app/media/Future Legends Tuesdays.jpg" alt="Future Legends Tuesdays" style={{width: "60%"}}></img>
                          {/* <p className = "text-secondary h5 pt-5 justify-content-center">No events right now. Check back soon!</p> */}
                        <div className = "row no-gutters pt-4 ">

                        {/*
                        <Card style={{ width: '18rem', margin: '2%' }}>
                          <Card.Body>
                            <Card.Title>Event #1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Location, Date</Card.Subtitle>
                            <Card.Text>
                              Event info
                            </Card.Text>
                            <Card.Link href="#">Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                          </Card.Body>
                        </Card>
                        */}

                        </div>
                    </div>

                </div>
            </div>
            {/*
            <div id = "form" className = "bg-darker pt-3 pb-3">
                <div className = "container">
                    <div className = "mx-auto col-10">
                        <p className = "text-center h2 text-white pb-3 pt-3">Access nearby events here!</p>
                    </div>
                </div>
            </div>
            */}
        </>
    )
}
