import React from 'react';
import "../../styles/App.css"
import AdvertiseForm from '../Forms/AdvertiseForm'
import MailChimpForm from '../Forms/MailChimpForm'

import { Button } from 'react-bootstrap';

const Advertise = () => {
    return (
        <>
            <div className = "headerBlock water">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="mx-auto text-center">
                        <p className = "text-light h2 pt-5">Advertise with us.</p>

                            {/* <
                            <h2 className = "title text-light h1 my-2">Advertise</h2>
                            <a className = "btn btn-primary p-2" href = "#form">Fill out our form</a>
                            */}
                        </div>

                    </div>
                </div>
            </div>
            <div className = "bg-dark pb-5">
                <div className = "container">
                    <div className = "text-center">
                    <p className = "text-light h2 pt-5">Digital Ads</p>
                        <div className = "row no-gutters pt-4 ">
                            <div className="col-sm-6 col-12">
                                <img className = "advertImage" src = "https://risenetwork.net/storage/app/media/rise1.gif"
                                    alt = "Rise network advertisement" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <img className = "advertImage " src = "https://risenetwork.net/storage/app/media/neon.gif"
                                    alt = "Rise network neon sign advertisement" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <img className = "advertImage " src = "https://risenetwork.net/storage/app/media/rise5.png"
                                    alt = "Rise network advertisement" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <img className = "advertImage" src = "https://risenetwork.net/storage/app/media/rise2.png"
                                    alt = "Rise network advertisement" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id = "form" className = "bg-darker pt-3 pb-3">
                <div className = "container">
                    <div className = "mx-auto col-10">
                        <p className = "text-center h2 text-white pb-3 pt-3"><a href="https://us17.list-manage.com/contact-form?u=8fccf4ff2ef677f4461fb2cf6&form_id=1a41c8083d347e2d107c0a1e64dbd764" target="_blank">Click here to contact us for a consulation.</a></p>

                        {/* <p className = "text-center text-white pb-3">Form not working? Click <a href="https://us17.list-manage.com/contact-form?u=8fccf4ff2ef677f4461fb2cf6&form_id=1a41c8083d347e2d107c0a1e64dbd764" target="_blank" className="text-white">here</a>.</p>
                        <div className="w-25 d-flex justify-content-center">
                          <MailChimpForm />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advertise;
