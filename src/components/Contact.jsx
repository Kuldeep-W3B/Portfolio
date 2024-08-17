import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/contacts', { name, email, message })
      .then(res => {
        console.log(res);
        toast.success("User created successfully");

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(err => {
        console.log(err);
        toast.error("An error occurred");
      });
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen max-w-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact Me</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
