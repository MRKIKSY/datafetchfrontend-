import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library

function UploadPictures() {
  const [formData, setFormData] = useState({
    id: uuidv4(), // Generating a unique ID
    firstName: '',
    lastName: '',
    dob: '',
    picture: null // Added field for picture
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'picture' ? files[0] : value // If the field is picture, use files[0] instead of value
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

      // Create a FormData object to send the form data including the picture
      const formDataToSend = new FormData();
      for (let key in formDataWithTimeStamp) {
        formDataToSend.append(key, formDataWithTimeStamp[key]);
      }

      const response = await axios.post('http://localhost:3000/api/savePicture', formDataToSend);
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

  const getRandomTailwindClass = () => {
    const classes = [
      'bg-red-200',
      'bg-green-200',
      'bg-blue-200',
      'bg-yellow-200',
      'bg-purple-200',
      'bg-pink-200',
      'bg-indigo-200',
      'bg-teal-200',
      'bg-gray-200',
      'bg-orange-200',
    ];
    return classes[Math.floor(Math.random() * classes.length)];
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-screen-lg">
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-blue-500 px-4 py-2">Upload Form</h2>
          <div className={`mb-4 ${getRandomTailwindClass()}`}>
            <label htmlFor="firstName" className="block text-lg text-gray-800 font-medium mb-2">First Name:</label>
            <input type="text" required autoComplete='off' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <div className={`mb-4 ${getRandomTailwindClass()}`}>
            <label htmlFor="lastName" className="block text-lg text-gray-800 font-medium mb-2">Last Name:</label>
            <input type="text" required autoComplete='off' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <div className={`mb-4 ${getRandomTailwindClass()}`}>
            <label htmlFor="dob" className="block text-lg text-gray-800 font-medium mb-2">Date of Birth:</label>
            <input type="date" required id="dob" name="dob" value={formData.dob} onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <div className={`mb-4 ${getRandomTailwindClass()}`}>
            <label htmlFor="picture" className="block text-lg text-gray-800 font-medium mb-2">Upload Picture:</label>
            <input type="file" required id="picture" name="picture" accept="image/*" onChange={handleChange} className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none p-2" />
          </div>
          <button type="submit" className="block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring focus:ring-indigo-200">
            Submit
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="text-2xl text-green-500 mb-4">Form submitted successfully.</p>
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

export default UploadPictures;



