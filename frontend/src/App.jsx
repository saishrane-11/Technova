import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NAvbar';
import Hero from './Hero';
import Footer from './Footer';
import Home from './Home';


// // Page Components
// const Home = () => <div className="p-5"> <Hero /></div>;
// const Contact = () => <div className="p-5">Contact Page</div>;
// const Restaurants = () => <div className="p-5">Restaurants Page</div>;
// const About = () => <div className="p-5">About Us Page</div>;
// const Profile = () => <div className="p-5">Profile Page</div>;

const App = () => {
  return (
    <Router>
      {/* Render the Navbar */}
      <Navbar />
     

      {/* Define the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
