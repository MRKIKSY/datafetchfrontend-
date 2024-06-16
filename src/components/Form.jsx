import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library

function Form() {
  const [formData, setFormData] = useState({
    id: uuidv4(), // Generating a unique ID
    title: '',
    category: '',
    desc: ''
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date().toISOString(); // Get current date and time
      const formDataWithTimeStamp = {
        ...formData,
        timestamp: currentDate // Add timestamp to form data
      };
      const response = await axios.post('http://localhost:3000/api/saveData', formDataWithTimeStamp);
      console.log(response.data); // Assuming backend responds with saved data
      setSuccessMessage(true); // Show success message
    } catch (error) {
      console.error('Error saving data:', error);
      setErrorMessage(true); // Show error message
    }
  };
  

  const handleOkClick = () => {
    setSuccessMessage(false); // Hide success message
    setErrorMessage(false); // Hide error message
    window.location.reload(); // Reload the page
  };

  // Function to generate a random background color
  const getRandomColor = () => {
    const colors = [
      '#FF6B6B', // Red
      '#48BB78', // Green
      '#4299E1', // Blue
      '#F6E05E', // Yellow
      '#9F7AEA', // Purple
      '#ED64A6', // Pink
      '#F687B3', // Light Pink
      '#818CF8', // Indigo
      '#63B3ED', // Light Blue
      '#68D391', // Teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Call getRandomColor function to get a random color for background
  const randomBackgroundColor = getRandomColor();

  return (
    <div style={{ backgroundColor: randomBackgroundColor }} className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-screen-lg">
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-blue-500 px-4 py-2">MR KIKSY PRIVATE EMAIL INBOX
      <br></br> TECH STACK USED FOR THIS PROJECT: React, Node js, Mongo Db, Express 
      </h2>
      <h6> This Page was built with the JS library React.js, By Completing this form, it is automatically
        rendered in the private inbox page. Proficient  knowledge of CRUD operations in Javascript is essential 
        for the building of this beginner friendly project.

        I have also designed this page to make the background colour change anytime the page is reloaded.
      
        
      </h6>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg text-gray-800 font-medium mb-2">Title:</label>
            <input  type="text" required autoComplete='off' id="title" name="title" value={formData.title} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-lg text-gray-800 font-medium mb-2">Category:</label>
            <input type="text"  required  id="category" name="category" autoComplete='off' value={formData.category} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block text-lg text-gray-800 font-medium mb-2">Description:</label>
            <textarea id="desc"  required name="desc" value={formData.desc} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2"></textarea>
          </div>
          <button type="submit" className="block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring focus:ring-indigo-200">
            Submit
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="text-2xl text-green-500 mb-4">Congratulations! Form submitted successfully.</p>
            <button onClick={handleOkClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">OK</button>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="text-2xl text-red-500 mb-4">Error submitting form. Please contact admin.</p>
            <button onClick={handleOkClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;  
