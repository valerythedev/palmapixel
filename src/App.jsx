import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header'

const HomePage = () => {
  return (
    <div>
     
    </div>
  );
};

const BookingPage = () => {
  return (
    <div>
      <h1>Booking Page</h1>
    </div>
  );
};

const PreviousWorksPage = () => {
  return (
    <div>
      <h1>Previous Works Page</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/previous-works" element={<PreviousWorksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
