import React, { useState } from 'react';

const WeddingWebsite = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 0,
    dietaryRestrictions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-serif">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/800')", mixBlendMode: "overlay" }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-6xl text-white font-light tracking-wide mb-6">Emma & James</h1>
          <p className="text-2xl text-white mb-8">are getting married</p>
          <div className="text-white text-3xl font-light">September 15, 2025</div>
          <button 
            className="mt-8 px-8 py-3 bg-purple-300 hover:bg-purple-400 text-green-900 rounded-full text-xl transition-colors duration-300"
            onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
          >
            Our Special Day
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-green-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center">
          <div className="text-xl font-light mb-2 md:mb-0">E & J</div>
          <div className="flex flex-wrap justify-center space-x-1 md:space-x-6">
            <a href="#story" className="px-3 py-2 hover:bg-green-800 rounded transition-colors">Our Story</a>
            <a href="#details" className="px-3 py-2 hover:bg-green-800 rounded transition-colors">Details</a>
            <a href="#gallery" className="px-3 py-2 hover:bg-green-800 rounded transition-colors">Gallery</a>
            <button 
              onClick={() => setShowRSVP(true)}
              className="px-4 py-2 bg-purple-300 hover:bg-purple-400 text-green-900 rounded transition-colors"
            >
              RSVP
            </button>
          </div>
        </div>
      </nav>

      {/* Our Story Section */}
      <section id="story" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl text-green-900 text-center mb-16 relative">
            Our Story
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-purple-300 mt-2"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <img src="/api/placeholder/500/500" alt="Couple" className="w-full h-auto rounded" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-6">
                We met on a hiking trail in the spring of 2021. James was photographing wildflowers, and Emma was sketching landscapes. Our mutual love for nature sparked a conversation that hasn't ended since.
              </p>
              <p className="text-lg leading-relaxed">
                Two years later, under a canopy of stars in the same forest where we first met, James proposed. Now we invite you to join us as we begin our greatest adventure together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 px-4 bg-gradient-to-b from-green-900 to-green-800 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl text-center mb-16 relative font-light">
            Wedding Details
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-purple-300 mt-2"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl mb-4 text-purple-200">Ceremony</h3>
              <p className="mb-3"><span className="text-purple-300">Date:</span> September 15, 2025</p>
              <p className="mb-3"><span className="text-purple-300">Time:</span> 3:00 PM</p>
              <p className="mb-3"><span className="text-purple-300">Location:</span> Wildflower Gardens</p>
              <p><span className="text-purple-300">Address:</span> 123 Forest Lane, Natureville</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl mb-4 text-purple-200">Reception</h3>
              <p className="mb-3"><span className="text-purple-300">Time:</span> 5:00 PM</p>
              <p className="mb-3"><span className="text-purple-300">Location:</span> The Green Pavilion</p>
              <p className="mb-3"><span className="text-purple-300">Address:</span> Same as ceremony</p>
              <p><span className="text-purple-300">Dress Code:</span> Garden Formal</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowRSVP(true)}
              className="px-8 py-3 bg-purple-300 hover:bg-purple-400 text-green-900 rounded-full text-xl transition-colors duration-300"
            >
              RSVP Now
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-green-900 text-center mb-16 relative">
            Our Gallery
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-purple-300 mt-2"></span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md bg-white">
                <img 
                  src={`/api/placeholder/${400 + i * 10}/${300 + i * 10}`} 
                  alt={`Gallery image ${i+1}`} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4 text-center">
        <div className="container mx-auto">
          <p className="mb-4 text-purple-200">We can't wait to celebrate with you!</p>
          <p className="text-sm opacity-75">© 2025 Emma & James Wedding</p>
        </div>
      </footer>

      {/* RSVP Modal */}
      {showRSVP && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              {!submitted ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl text-green-900">RSVP</h3>
                    <button 
                      onClick={() => setShowRSVP(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Will you be attending?</label>
                      <select
                        name="attending"
                        value={formData.attending}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                      >
                        <option value="yes">Happily Accepts</option>
                        <option value="no">Regretfully Declines</option>
                      </select>
                    </div>
                    
                    {formData.attending === 'yes' && (
                      <>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">Number of Guests (including yourself)</label>
                          <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-2">Dietary Restrictions</label>
                          <textarea
                            name="dietaryRestrictions"
                            value={formData.dietaryRestrictions}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                            rows="3"
                          />
                        </div>
                      </>
                    )}
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-green-800 text-white rounded hover:bg-green-900 transition-colors"
                    >
                      Submit RSVP
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <svg className="mx-auto mb-4 text-green-600 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h3 className="text-2xl text-green-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your RSVP has been submitted successfully.</p>
                  <button
                    onClick={() => setShowRSVP(false)}
                    className="px-6 py-2 bg-purple-300 text-green-900 rounded hover:bg-purple-400 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingWebsite;
