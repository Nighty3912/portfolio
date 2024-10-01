import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import viteLogo from '/vite.svg'
//import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarMenu from './components/NavbarMenu'
import React from 'react'

import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar';





const MainContainer = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-wrapper">
        <NavbarMenu />
        {/* <div className="content"> */}
        {/* <div>
      <h1>About Me</h1>
      <p>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies.</p>
      <p>My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.</p>
    </div> */}
    <Outlet/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainContainer;

//export default App



// export default function ProfileCard() {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//         <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//           <Card.Img variant="top" src={reactLogo} alt="Profile Image" />
//           <Card.Body>
//             <Card.Title>Ahmad Zia</Card.Title>
//             <Card.Text>
//              Learning Mern
//             </Card.Text>
//             <ProgressBar now={50} label={`${50}%`} className="mb-3" variant="success" />
//             <Button variant="primary">Follow</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // fragment makes div single parent... as it only accepts single parent
//     <> 
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Ahmad</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App

