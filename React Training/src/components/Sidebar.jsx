import React from 'react';
import '../index.css';
import profilePic from '../assets/profile.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="profile">
//         <img src={profilePic} alt="Muhammad Ahmad Zia" className="profile-pic" />
//         <h1 className="name">Muhammad Ahmad Zia</h1>
//         <p className="title">Mern Developer</p>
//       </div>
//       <div className="social-links">
       
//         </a>
//         <a href="https://www.linkedin.com/in/mahmadzia" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
//         </a>
//         <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTwitter} className="social-icon" />
//         </a>
//         <a href="https://github.com/Nighty3912" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faGithub} className="social-icon" />
//         </a>
//       </div>
//       <div className="contact-info">
//         <p className="contact-item">
//           <FontAwesomeIcon icon={faPhone} className="contact-icon" /> ++9231144995640
//         </p>
//         <p className="contact-item">
//           <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> m.ahmad.zia@hotmail.com
//         </p>
//         <p className="contact-item">
//           <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Lahore, Pakistan
//         </p>
//       </div>
//       <div className="resume-download">
//         <a href="../assets/resume.pdf" className="download-button" download>Download Resume</a>
//       </div>
//     </aside>
//   );
// };

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <h2 className="profile-name">Muhammad Ahmad Zia</h2>
          <p className="profile-title">Mern Developer</p>
        </div>
  
        <div className="social-icons">
          <div className="social-icon">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          </div>
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/mahmadzia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
          </div>
          <div className="social-icon">
          <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
          </div>
          <div className="social-icon">
          <a href="https://github.com/Nighty3912" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
          </div>
        </div>
  
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <div className="info-text">
              <span className="info-label">Phone</span>
              <span className="info-detail">
                 <a href="tel:+923114499640">+923114499640</a>
              </span>
            </div>
          </div>
        <hr />
        <div className="info-item">
             <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
             <div className="info-text">
               <span className="info-label">Email</span>
               <span className="info-detail">
              <a href="mailto:m.ahmad.zia@hotmail.com">m.ahmad.zia@hotmail.com</a>
              </span>
            </div>
          </div>
          <hr />
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <div className="info-text">
              <span className="info-label">Location</span>
              <span className="info-detail">Lahore, Pakistan</span>
            </div>
          </div>
        </div>
  
        <div className="download-resume">
        <a href="/resume.pdf" download="resume.pdf">
        <button className="download-btn">Download Resume</button>
        </a>
        </div>
      </div>
    );
  };
  
export default Sidebar;
