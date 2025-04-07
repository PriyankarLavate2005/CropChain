// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import CustomItemContext from './context/ItemContext';
import './App.css';

const App = () => {
  return (
    <CustomItemContext>
      <Router>
        <AppRoutes />
      </Router>
    </CustomItemContext>
  );
};

export default App;