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

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <div className="resume-sections">
        {/* Education Section */}
        <div className="section">
          <h3>🎓 Education</h3>
          <div className="education-box">
            <div className="education-item">
              <h4>2021-2025</h4>
              <p><strong>University Of Central Punjab</strong></p>
              <p>Bachelors in Computer Science</p>
            </div>
            <div className="education-item">
              <h4>2018-2020</h4>
              <p><strong>Lahore Grammar School</strong></p>
              <p>A-Levels</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="section">
          <h3>💼 Experience</h3>
          <div className="experience-box">
            <div className="experience-item">
              <h4>Fresher</h4>
              {/* <p><strong></strong></p>
              <p>Moringa School</p> */}
             </div>
            {/* <div className="experience-item">
              <h4>2021-2022</h4>
              <p><strong>Website Development</strong></p>
              <p>Village 2 Nation</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-box">
          <h3>Work Skills</h3>
          <div className="skills-list">
            <span>React.js</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Tailwind CSS</span>
            <span>C</span>
            <span>C++</span>
            <span>Python</span>
            {/* <span>Dart</span>
            <span>Flutter</span> */}
            <span>JavaScript</span>
            {/* <span>HTML5</span>
            <span>CSS3</span> */}
            <span>MERN Stack</span>
            <span>Kotlin</span>
            <span>MySQL</span>
           
       
            
            
          </div>
        </div>

        <div className="skills-box">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            <span>Time Management</span>
            <span>Communication</span>
            <span>Mentorship</span>
            <span>Problem-Solving</span>
            <span>Research</span>
            <span>Flexibility</span>
            <span>Networking and Adaptability</span>
            <span>Teamwork</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
