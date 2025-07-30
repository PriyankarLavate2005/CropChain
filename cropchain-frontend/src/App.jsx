import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './components/auth/Login';
import FarmerSignup from './components/auth/FarmerSignup';
import CustomerSignup from './components/auth/CustomerSignup';
import FarmerDashboardPage from './pages/FarmerDashboardPage';
import CustomerDashboardPage from './pages/CustomerDashboardPage';
import MarketplacePage from './pages/MarketplacePage';
import WeatherPage from './pages/WeatherPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/farmer-signup" element={<FarmerSignup />} />
                <Route path="/customer-signup" element={<CustomerSignup />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/farmer-dashboard" 
                  element={
                    <ProtectedRoute userType="farmer">
                      <FarmerDashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/customer-dashboard" 
                  element={
                    <ProtectedRoute userType="customer">
                      <CustomerDashboardPage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;