import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter instead of HashRouter
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

