import React from "react";
import '../../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer class="footer">
            {/* <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h5><i class="fa fa-road"></i> The Rise Network™</h5>
                        <div class="row">
                            <div class="col">
                                <p>Tech Support: <br></br>
                                <a href = "mailto: techsupport@risenetwork.net?subject= Rise Network Tech Support — 'Your Issue'">techsupport@risenetwork.net</a>
                                </p>
                            </div>
                            <div class="col">
                                <p>P.O. Box 31161 <br></br>
                                    Augusta, GA 30903</p>
                            </div>
                        </div>
                        <ul class="nav">
                            <li class="nav-item"><a href="https://www.twitter.com/TheRiseNetwork1" target="_blank"
                                style={{ margin: 10 }}>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a></li>
                            <li class="nav-item"><a href="https://www.facebook.com/pages/The-Rise-Network/520747804657086?ref=hl" target="_blank"
                                style={{ margin: 10 }}>
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a></li>
                            <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                        </ul>
                        <br></br>
                    </div>
                    <div class="col-md-5">
                    <h5><i class="fa fa-road"></i> Support Us</h5>
                    <div class = "row"> 
                    <div class="col-6">
                    </div>
                        </div>
                    
                            <p>Your free account is made possible by generous contributions from Risenetwork.net users.  To cover the cost of your account and help us create a platform for everyone, please pay what you can.  All donations are welcomed, no matter how big or small. Thank you.
                            </p>
                            </div>
                            <div class="col">
                            <img src="https://risenetwork.net/storage/app/media/Donate_Button_QR_Code.png" className="pb-3" style={{ width: "50%" }} alt="QR Code"></img>
                            <div class="row">
                            <a target="_blank" href="https://www.paypal.com/donate?hosted_button_id=QDHBQ5XRB5PT4" className="btn btn-info"
                                style={{ margin: 16 }}
                            >Donate</a>
                            </div>
                </div>
                </div>
            </div> */}

            <div class="copyright">
            <div class="container"> 
                <div class="row"> 
                    <div class="col">
                        <span>© 2021 The Rise Network. All Right Reserved.</span>
                    </div>
                    
                    <div class="colmd-2">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="/home">Home</a>
                                </li>
                                <li>
                                    <a href="/subscription">Subscribe</a>
                                </li>
                                <li>
                                    <a href="/search">Search</a>
                                </li>
                                <li>
                                    <a href="/bookcase">Bookcase</a>
                                </li>
                                <li>
                                    <a href="/bookstore">Bookstore</a>
                                </li>
                                <li>
                                    <a href="/advertise">Advertise</a>
                                </li>
                                <li>
                                    <a href="/user-redirect">Account</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        </footer>

    );
}

export default Footer;