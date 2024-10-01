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
import TestProp from '../components/TestProp';

function Work() {
  return (
    // <div className="main-layout">
    //   <Sidebar />
    //   <div className="content-wrapper">
    //     <NavbarMenu />
        <div className="content">
        <div>
          <TestProp heading="Test Work props"/>
      <h1>Work</h1>
      <p>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies.</p>
      <p>My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
    </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Work
