// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import CardaContent from './pages/CardaContent';
import CardbContent from './pages/CardbContent';
import CardcContent from './pages/CardcContent';
import CarddContent from './pages/CarddContent';
import CardeContent from './pages/CardeContent';
import CardfContent from './pages/CardfContent';
import CardgContent from './pages/CardgContent';
import { DateTimeProvider } from './DateTimeContext';

export default function App() {
  return (
    <DateTimeProvider>
      <Router>
        <div>
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/cardacontent" element={<CardaContent />} />
            <Route path="/cardbcontent" element={<CardbContent />} />
            <Route path="/cardccontent" element={<CardcContent />} />
            <Route path="/carddcontent" element={<CarddContent />} />
            <Route path="/cardecontent" element={<CardeContent />} />
            <Route path="/cardfcontent" element={<CardfContent />} />
            <Route path="/cardgcontent" element={<CardgContent />} />
          </Routes>
        </div>
      </Router>
    </DateTimeProvider>
  );
}















