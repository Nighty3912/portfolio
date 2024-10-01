// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

// function NavbarDarkExample() {
//   return (
//     <Navbar variant="dark" bg="dark" expand="lg" fixed='top'>
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/">Portfolio Page</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-dark-example" />
//         <Navbar.Collapse id="navbar-dark-example">
//           <Nav>

//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title="More"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item as={NavLink} to="/home">Home</NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/about">AboutUs</NavDropdown.Item>
             
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarDarkExample;
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faBriefcase, faEnvelope, faUserPlus} from '@fortawesome/free-solid-svg-icons';


const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span className="nav-text">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
            <span className="nav-text">Resume</span>
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/work" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
            <span className="nav-text">Work</span>
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            <span className="nav-text">Contact</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faUserPlus} className="nav-icon" />
            <span className="nav-text">Sign Up</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;