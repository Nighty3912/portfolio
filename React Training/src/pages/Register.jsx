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
import axios from 'axios';

const RegistrationForm = () => {
 
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
    .min(3, 'Username should be at least 3 characters long')
    .required('Username is required'),
  firstName: Yup.string()
    .min(2, 'First Name should be at least 2 characters long')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last Name should be at least 2 characters long')
    .required('Last Name is required'),
    phoneNumber: Yup.string()
      .matches(
        /^\+923\d{2}\d{7}$/,
        'Phone number must be in the format +923XXXXXXXXX'
      )
      .required('Phone number is required'),
      email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    dateOfBirth: Yup.date()
      .required('Date of Birth is required')
      .nullable()
      .test('DOB', 'You must be at least 18 years old', function (value) {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18;
      }),
  });

  
  const initialValues = {
    userName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  };


//   const onSubmit = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:5000/register', values);
//       console.log('User registered successfully', response.data);
//     } catch (error) {
//       console.error('Registration error', error.response.data);
//     }
//   };
const onSubmit = async (values) => {
    console.log('Submitting form with values:', values);
    try {
      const response = await axios.post('http://localhost:5000/register', values);
      console.log('User registered successfully', response.data);
    } catch (error) {
      
      if (error.response && error.response.data) {
        console.error('Registration error', error.response.data);
      } else {
        
        console.error('Registration error', error.message);
      }
    }
  };

  return (
    
    <div className=" register-container border border-dark-subtle form shadow p-3 mb-5 bg-body-tertiary rounded">
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-group">
            <div>
              <label htmlFor="userName">UserName:</label>
              <Field
                type="text"
                id="userName"
                name="userName"
                className="form-control"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <Field
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-control"
                />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-danger"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
   
  );
};

export default RegistrationForm;