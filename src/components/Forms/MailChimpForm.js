import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

function MailChimpForm(props) {
    return (
        <Mailchimp
        action='https://risenetwork.us17.list-manage.com/subscribe/post?u=8fccf4ff2ef677f4461fb2cf6&amp;id=fa86553921'
        //Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email address',
            type: 'email',
            required: true
          },
          {
            name: 'Name',
            placeholder: 'Your Name',
            type: 'text',
            required: false
          },
          {
            name: 'Phone Number',
            placeholder: 'Phone Number',
            type: 'phone',
            required: false
          },
          {
            name: 'Industry',
            placeholder: 'Industry',
            type: 'text',
            required: false
          }
        ]}
        // Change predetermined language
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for contacting us! We will get back to you as soon as we can.",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many attempts for this email address",
            button: "Submit"
          }
        }
        />
    );
}

export default MailChimpForm;
