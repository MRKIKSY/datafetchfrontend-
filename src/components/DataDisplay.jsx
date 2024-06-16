import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getData'); // Adjust the URL as needed
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, set a state to handle error display or inform the user
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-blue-500 px-4 py-2">
        MR KIKSY PRIVATE EMAIL INBOX
        <br /> TECH STACK USED FOR THIS PROJECT: React, Node js, Mongo Db, Express
      </h2>
      <h6>
        This Page was built with the knowledge of CRUD operations in Javascript. Sent Messages from the Compose Message
        page are automatically redenred here and fetched via axios and through the use effect hook. I have also added a
        Date and TimeStamp so the time the private messages was sent can be visible. In Real Life, this Page would be
        protected via a Password so only authorised users can view it
      </h6>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.title}</td>
              <td className="border border-gray-300 px-4 py-2">{item.category}</td>
              <td className="border border-gray-300 px-4 py-2">{item.desc}</td>
              <td className="border border-gray-300 px-4 py-2">{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;




