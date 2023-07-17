import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/User.css";
import "../../styles/Posts.css";
import usePublic from '../../hooks/usePublic';
import usePosts from '../../hooks/usePosts';
import Posts from './Posts';
import Create from '../Create'
import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function User({ match }) {
    const { docs } = usePublic(match.params.username)
    const { posts } = usePosts({username : match.params.username })
    const { currentUser } = useAuth();
    return (
        <>
        { docs && 
            <>
                <div
                style = {{
                    backgroundImage: `url(${docs.header}`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} id = "head-img" className = "row justify-content-center" />
                <div id = "profile-options" className = "row justify-content-center">
                    <div id = "profile" className = "no-padding col-sm-4 col-3">
                        <img className = "center rounded-circle p-0" src = {docs.img}
                            alt = "Profile"
                        />
                    </div>
                    <div className = "col-sm-2 col-3 d-flex align-items-center justify-content-center">
                        <div className="w-100">
                            <Link className="text-white options-link pt-5 mt-5" to = "#">Followers</Link>
                        </div>
                    </div>
                    <div className = "col-sm-2 col-3 d-flex align-items-center justify-content-center">
                        <div className="w-100">
                            <Link className="text-white options-link pt-5 mt-5" to = "#">Following</Link>
                        </div>
                    </div>
                    <div className = "col-sm-2 col-3 d-flex align-items-center justify-content-center">
                        <div className="w-100">
                            <Link className="text-white options-link pt-5 mt-5" to = "#">Images</Link>
                        </div>
                    </div>
                    <div className = "col-sm-2 col-3 d-flex align-items-center justify-content-center">
                        <div className="w-100">
                            <Link className="text-white options-link pt-5 mt-5" to = "#">Network</Link>
                        </div>
                    </div>
                </div>

                <div className="sidebar d-none d-lg-block">
                    <div id = "about">
                        <div class = "text-center mt-5">
                        <p> Twitter </p>
                            <a href = "https://www.twitter.com/" target = "_blank">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                        </div>
                    </div>
                    <div id = "about">
                        <div className = "text-center mt-3 ">
                            <p> Instagram </p>
                            <a href="https://www.instagram.com/" target = "_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div id = "about">
                        <div className = "text-center mt-3">
                            <p> Facebook </p>
                            <a href="https://www.facebook.com/" target = "_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className = "text-center mt-3">
                        <button id = "blog" className = "btn rounded text-white"> Blog (coming soon)</button>
                    </div>
                </div>

                <div className = "content mt-5">
                    <div className = "name">
                        <div className="dropdown">
                            <h3>{docs.name}</h3>
                            <p className = "btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Invite Friends</p>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            </div>
                        </div>
                    </div>

                    <h3>About the user</h3>
                    <div className = "user-info mb-3">
                        <p className = "pl-2 pt-1">{ docs.bio ? docs.bio : "Nothing entered..."}</p>
                    </div>

                    <h3> Posts </h3> 
                    <div>
                        {currentUser && (docs.uid === currentUser.uid && <Create />)}
                        <Posts posts={posts}/>
                    </div>
                    <div className = "d-md-none">
                        <h3> User's Feed </h3>
                        <div id = "about">
                            <div className = "text-center">
                                <p> Facebook </p>
                            </div>
                        </div>
                        <div id = "about">
                            <div className = "text-center">
                                <p> Twitter </p>
                            </div>
                        </div>
                        <div id = "about">
                            <div className = "text-center">
                                <p> Instagram </p>
                            </div>
                    </div>
                </div>
            </div>
        </>
        }
    </>
    )
}
