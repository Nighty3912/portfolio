import { useState } from 'react'
//import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import NavbarMenu from '../components/NavbarMenu'
import React from 'react'
import Sidebar from '../components/sidebar';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <hr className="header-line" />

      <div className="contact-form">
        <p>
          I am always open to discussing <b>new projects, opportunities in tech world, partnerships</b> and more so <b>mentorship</b>.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


