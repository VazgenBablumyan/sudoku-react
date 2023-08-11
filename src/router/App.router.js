import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShiritoriGame from '../Components/ShiritoriGame/ShiritoriGame';

const AppRouter = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<ShiritoriGame />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;
