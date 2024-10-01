// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import RegisterPage from './pages/Register';
import React from 'react'
import ProductsPage from './components/products'
const router = createBrowserRouter(
  createRoutesFromElements(
    // <>
    // <Route path="/" element={<App/>}/>
    //   <Route path='/home' element={<HomePage/>}/>
    //   <Route path='/resume' element={<ResumePage/>}/>
    //   <Route path='/work' element={<WorkPage/>}/>
    //   <Route path='/contact' element={<ContactPage/>}/>
    //   </>
    <>
    <Route path="/" element={<App/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/resume' element={<ResumePage/>}/>
      <Route path='/work' element={<WorkPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
    </Route>
      </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
