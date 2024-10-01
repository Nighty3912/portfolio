import { useState,React, useRef } from 'react'
//import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import NavbarMenu from '../components/NavbarMenu'
import Sidebar from '../components/sidebar';
import '../index.css';
import { Outlet } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPaintBrush, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
    return (
      <div className="main-content">
        <section className="about-section">
          <h1 className="about-heading">ABOUT ME</h1>
          <hr className="heading-line" />
          <p className="about-description">
            Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.
          </p>
        </section>
  
        <section className="what-i-do-section">
          <h2 className="what-i-do-heading">What I do!</h2>
          <div className="services-grid">
            <div className="service-card web-dev">
              <FontAwesomeIcon icon={faCode} className="service-icon" />
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.
              </p>
            </div>
  
            <div className="service-card app-dev">
              <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
              <h3 className="service-title">App Development</h3>
              <p className="service-description">
                With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together.
              </p>
            </div>
  
            <div className="service-card ui-ux">
              <FontAwesomeIcon icon={faPaintBrush} className="service-icon" />
              <h3 className="service-title">UI/UX Designing</h3>
              <p className="service-description">
                Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.
              </p>
            </div>
  
            <div className="service-card mentorship">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="service-icon" />
              <h3 className="service-title">Mentorship</h3>
              <p className="service-description">
                I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default MainContent;

// function Home() {
//     const form = useRef()

//     const submitHandler = (e) =>{
//         e.preventDefault();
//         const testform =e.currentTarget;
//         if (!testform.checkValidity()){
//             setValidated(true);
//             return;
//         }
//         const data=new FormData(form.current);
//         console.log(data.get('First-Name')); //gets data using names not ids
//     }
//     return(

//         <>
//         <form  noValidate validated={validated} ref={form} onSubmit={submitHandler} class="border border-dark-subtle form shadow p-3 mb-5 bg-body-tertiary rounded">
//         <h1><center>Registration Form</center></h1>
//         <br/>
//         <div id='regform'>
//          <label for="Username">Username: </label>
//          <input className="form-control" type="text" id='Username' name='Username' required/>
//          <validated && <p> </p>
//          <br />
//          <label for="First-Name">First-Name: </label>
//          <input className="form-control" type="text" id='First Name'name='First-Name' required/>
//          <br />
//          <label for="Last-Name">Last-Name: </label>
//          <input className="form-control" type="text" id='Last Name' name='Last-Name'required/>
//          <br />
//          <button type='submit' className='btn btn-primary btn-outline-light'>Submit</button>
//          </div>
//         </form>
//         </>
//     )
    
//     // const [username,setUsername]=useState()
//     // const [firstname,setFirstname]=useState()
//     // const [lastname,setLastname]=useState()
//     // const [flag,setFlag]= useState();
//     // function changingvalues(){
//     //     setFlag(true)
//     //     console.log(`Username: ${username}`)
//     //     console.log(`First name: ${firstname}`)
//     //     console.log(`Last name: ${lastname}`)
//     // }
//     // return (
  
//     //       <div className="content">
//     //   <div
//     //     class="border border-dark-subtle form shadow p-3 mb-5 bg-body-tertiary rounded"
//     //   >
//     //     <h1><center>Registration Form</center></h1>
//     //     <br />
//     //     {flag &&
//     //     <>
//     //     New Username: {username}
//     //     <br/>
//     //     New First Name: {firstname}
//     //      <br/>
//     //     New Last Name: {lastname}
//     //     </>
//     //     }      
//     //     <br/><br/><br/>
//     //     <label for="">Username: </label>
//     //     <input class="form-control" type="text" onChange={(e) => setUsername(e.target.value)} />
//     //     <br />
//     //     <label for="">First Name: </label>
//     //     <input class="form-control" type="text" onChange={(e) => setFirstname(e.target.value)}/>
//     //     <br />
//     //     <label for="">Last Name: </label>
//     //     <input class="form-control" type="text" onChange={(e) => setLastname(e.target.value)}/>
//     //     <br />
        
//     //     <input

//     //       class="btn btn-primary btn-outline-light"
//     //       type="submit"
//     //       value="Submit"
//     //       onClick={() => changingvalues()}
//     //     />
//     //     <br />
//     //   </div>
//     //       </div>

//     //   </div>
//     // );
//   };

// export default Home
