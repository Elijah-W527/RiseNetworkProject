import React from 'react';
import "../../styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const Subscription = () => {

    return (
        <>
            <div className="headerBlock trees">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="mx-auto text-center">
                            <h2 className="title text-light h1 my-2">Want exclusive content?</h2>
                            <form action="/signup">
                                <button className="btn btn-primary p-2"
                                    style={{ fontSize: 19 }}>
                                    Subscribe Here
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row no-gutters pt-4 ">
            </div>
         
            <div className="row no-gutters pt-4 ">
            </div>
            <div className="container pt-3">
                <div className="row text-center" >
                    <div className="col-sm-6 col-12">
                        <p className="h3">Who are we?</p>
                        <p>The 'I' in Rise Network stands for individuality. The Rise Network ("TRN") - Where past and future legends meet and tomorrow's legends "Rise" today, is a platform for talented individuals and entities from diverse backgrounds and industries, who are seeking to express themselves, their heritage, their content, their opinions, their products, their culture, their experiences, and their events freely. TRN is for individuals, businesses, advertisers, agencies, and other networks to use to cultivate dialogue and create exposure. TRN supports opposing ideas and views to present an authentic local, national and global presence.</p>
                    </div>
                    <div className="col-sm-6 col-12">
                        <p className="h3">What we do.</p>
                        <p>The Rise Network (“TRN”) is a creative outlet to express your individuality, dispel stereotypes, and gain insight into others, by exchanging ideas and viewpoints with like and unlike minded people.  </p>
                    </div>
                    <div className="col-sm-6 col-12">
                        <p className="h3">What we stand for?</p>
                        <p>The Rise Network ("TRN") seeks to uphold the fundamentals that defines humanity. Our primary commitment is to honor truth, respect the uniqueness of every human being, and give face and voice to the multitude of talented people the world has to offer.</p>
                    </div>
                    <div className="col-sm-6 col-12">
                        <p className="h3">What we believe.</p>
                        <p>Everyone's opinion has merit. A greater understanding of others is achieved through active, objective listening, and being willing to respectfully engage in dialogue. Communication with those who are different from us, brings into focus what we have in common, and highlights the benefits of embracing what makes us unique. Aspire to "Rise" above and beyond on TRN – The Rise Network.</p>
                    </div>
                </div>
            </div>
            <div className="bg-light mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-12 p-3 p-md-5">
                            <p className="h3 text-primary"> About us</p>
                            <p>The Rise Network™ ("TRN") - Where past and future legends meet and tomorrow's legends "Rise" today! - is a global platform where creative individuals showcase their talent, while we provide branding, advertising and marketing exposure.</p>
                            <p className="h3 text-primary">Our goals</p>
                            <p>Entertaining the world with quality content and provide a platform where we can discuss the issues that affect us all is one goal. Helping you express yourself around the globe is another.</p>
                            <a href="/login" className="btn btn-info">Learn More</a>

                        </div>
                        <div className="col-sm-6 col-12 p-3 p-md-0">
                            <div className="row h-100 justify-content-center align-items-center">
                                <img className="img-fluid" src="https://risenetwork.net/storage/app/media/unsplash-beach.jpg"
                                    alt="Beach" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center">
                    <p className="h4 mt-2 pt-5">Our subscribers love the perks.</p>
                    <div className="row pt-5">
                        <div className="col-sm-4 col-12">
                            <FontAwesomeIcon icon={faAward} size='5x' />
                            <p className="mt-2">You will have access to our entertainment platform and all of our content.</p>
                        </div>
                        <div className="col-sm-4 col-12">
                            <FontAwesomeIcon icon={faAward} size='5x' />
                            <p className="mt-2">You will be a part of helping our nation get helpful information and inspiration, as we work together to help our world recover and grow.</p>
                        </div>
                        <div className="col-sm-4 col-12">
                            <FontAwesomeIcon icon={faAward} size='5x' />
                            <p className="mt-2">Your donations help create jobs and defray the costs involved with research and production.</p>
                        </div>
                    </div>
                    {/* <div className="row pt-5 justify-content-md-center">
                        <div className="col-sm-4 col-12">
                            <img src="https://risenetwork.net/storage/app/media/Donate_Button_QR_Code.png" className="pb-3" style={{ width: "25%" }} alt="QR Code"></img>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <p className="mt-2 bold">Use the donate button or scan the QR code with your mobile phone.</p>
                    </div>
                    <div className="justify-content-md-center">
                        <a target="_blank" href="https://www.paypal.com/donate?hosted_button_id=QDHBQ5XRB5PT4" className="btn btn-info">Donate</a>
                    </div> */}
                </div>
            </div>
            <div className="row no-gutters pt-4 ">
            </div>
            <div className="bg-secondary">
                <div className="container pt-5 pb-5 text-center">
                    <p className="text-white h2">Get our exclusive content!</p>
                    <div className="mx-auto col-md-3 col-12">
                        <div className="card mt-3">
                            <div className="card-body">
                                <form action="/signup">
                                    <button className="btn btn-primary p-2"
                                        style={{ fontSize: 19 }}>
                                        Subscribe Here
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Subscription;
