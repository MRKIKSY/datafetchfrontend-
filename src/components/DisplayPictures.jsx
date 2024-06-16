








import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayPictures() {
  const [submittedPictures, setSubmittedPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('https://privateinboxapp-1.onrender.com/api/getPictures');
        setSubmittedPictures(response.data);
      } catch (error) {
        console.error('Error fetching submitted pictures:', error);
        // Optionally, set a state to handle error display or inform the user
      }
    };

    fetchPictures();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-blue-500 px-4 py-2">
        Submitted Pictures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {submittedPictures.map(picture => (
          <div key={picture.id} className="max-w-xs overflow-hidden rounded shadow-lg">
            <img src={`http://localhost:3000/server/uploads/${picture.picturePath}`} alt="Uploaded" className="w-full" />


            
            
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name: {picture.firstName} {picture.lastName}</div>
              <p className="text-gray-700 text-base">
                Date of Birth: {picture.dob}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Timestamp: {picture.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayPictures;
