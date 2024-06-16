import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import DataDisplay from './components/DataDisplay';
import UploadPictures from "./components/UploadPictures";
import DisplayPictures from "./components/DisplayPictures"

function App() {
  return (
    <Router>
      <div>
      <nav className="flex items-center justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 inline-block"
          >
            Navigate to Compose Message
          </Link>
        </li>
        <li>
          <Link
            to="/datadisplay"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 inline-block"
          >
            Navigate to Private Inbox
          </Link>
        </li>
      </ul>
    </nav>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/datadisplay" element={<DataDisplay />} />
          <Route exact  path="/uploadpictures" element={<UploadPictures />} />
          <Route exact  path="/displaypictures" element={<DisplayPictures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
