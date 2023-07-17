import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (  
            <div className={styles.content + " container-fluid"}>

                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
                    <div className="intro-info-content text-center ">
                        <img id = "main-logo" className = "img-fluid" styles = "height: 100vh; display:block; margin:auto;" src = "https://risenetwork.net/storage/app/media/risefinal.png" alt="Logo"/>
                        <h5 styles = "color:black; padding-top: 10px;" className="font-up mb-5 mt-1 ">Where past and future legends meet and tomorrow's legends "Rise" today</h5>
                        <a href = "/login"><button className={"btn btn-primary  btn-lg " + styles.buttonSpace }>Sign In</button></a>
                        <a href = "/subscription"><button className={"btn btn-primary  btn-lg " + styles.buttonSpace }>Subscribe</button></a>
                        <a href = "/advertise"><button className={"btn btn-primary  btn-lg " + styles.buttonSpace }>Advertise</button></a>
                    </div>
                </div>
            </div>
        
    );
}

export default Home;