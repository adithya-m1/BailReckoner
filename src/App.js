import React, { useState } from 'react';
import './App.css';
import AboutSection from './AboutSection'; // Import the AboutSection component

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // State to track the current section
  const [showLoginForm, setShowLoginForm] = useState(false); // State to track login form visibility

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setShowLoginForm(false); // Close the login form when navigating to other sections
  };

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm); // Toggle login form visibility
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white py-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo1.png" alt="Supreme Court Logo" className="h-16 w-16" />
            <div className="ml-6">
              <h1 className="text-3xl font-bold">Bail Reckoner</h1>
              <p className="text-lg">Where Hope meets Freedom</p>
            </div>
          </div>
          <div className="flex space-x-6 pr-8">
            <a href="#" className="text-gray-600 font-bold">Search</a>
            <a href="#" className="text-gray-600 font-bold">Notifications</a>
            <a href="#" className="text-gray-600 font-bold" onClick={handleLoginClick}>Login</a>
            <a href="#" className="text-gray-600 font-bold">Accessibility</a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-400 text-black py-2">
        <div className="container mx-auto flex justify-between">
          <button onClick={() => handleNavClick('home')} className="hover:bg-teal-600 px-4 py-2 font-bold">Home</button>
          <button onClick={() => handleNavClick('about')} className="hover:bg-teal-600 px-4 py-2 font-bold">About Bail Reckoner</button>
          <button onClick={() => handleNavClick('eligibility')} className="hover:bg-teal-600 px-4 py-2 font-bold">Eligibility Calculator</button>
          <button onClick={() => handleNavClick('undertrials')} className="hover:bg-teal-600 px-4 py-2 font-bold">Undertrials Section</button>
          <button onClick={() => handleNavClick('legal-aid')} className="hover:bg-teal-600 px-4 py-2 font-bold">Legal-aid Section</button>
          <button onClick={() => handleNavClick('judges')} className="hover:bg-teal-600 px-4 py-2 font-bold">Judge's Section</button>
          <a href="https://njdg.ecourts.gov.in/njdg_v3//?p=home/index&state_code=&dist_code=&app_token=cf6aa5836c452ea41724b12ace143674bdff39402b3e29991128f36284c02f44#?app_token=419d96f9d971d944f3f79743416c8f99321ed114332c2355743a1c45752c9024"
            target="_blank"
            className="hover:bg-teal-600 px-4 py-2 font-bold"
          >
            Judicial Data
          </a>
        </div>
      </nav>

      {/* Conditional About Section */}
      {currentSection === 'about' && <AboutSection />}

      {/* Login Form */}
      {showLoginForm && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md flex justify-center">
          <div className="w-full max-w-xs">
            <h2 className="text-lg font-bold mb-4 text-center">Login Options</h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                Login using ePrison ID
              </button>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                Login as Judge
              </button>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                Login as Lawyer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner Section (moved to bottom) */}
      {currentSection === 'home' && (
        <section className="relative bg-gray-100 py-10 mt-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Streamlining Bail, Simplifying Justice</h2>
            <img
              src="/court.jpg"
              alt="Supreme Court Building"
              className="mx-auto"
            />
          </div>
        </section>
      )}

      {/* Footer Section with Latest Updates */}
      <footer className="bg-blue-400 text-white py-4 mt-10">
        <div className="container mx-auto flex justify-between items-center">
          <p>Latest Updates</p>
          <a href="#digital-transformation" className="bg-blue-400 px-2 py-1 rounded">Digital Transformation in Indian Judiciary</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
