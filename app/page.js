'use client';

import React, { useEffect, useState } from 'react';
import AnimatedSection from './components/AnimatedSection';
import AnimatedGlasses from './components/AnimatedGlasses';

const page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <AnimatedGlasses />
        
        {/* Test element to verify animations */}
        <div className="absolute top-5 left-5 w-8 h-8 bg-green-500 rounded-full animate-test z-20"></div>
        
        <AnimatedSection animation="fadeIn" delay={0}>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white animate-pulse">
              Welcome to Speciano
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Discover amazing products and services
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-glow">
              Get Started
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">About Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideInLeft" delay={200}>
              <div className="transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50 p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideInRight" delay={400}>
              <div className="transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50 p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Products</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Product 1",
                description: "High-quality product with amazing features.",
                delay: 200
              },
              {
                title: "Product 2", 
                description: "Premium solution for your needs.",
                delay: 400
              },
              {
                title: "Product 3",
                description: "Innovative design meets functionality.",
                delay: 600
              }
            ].map((product, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={product.delay}>
                <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-500 hover:bg-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 hover-lift">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300 animate-float"></div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn" delay={0}>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideInLeft" delay={200}>
              <div className="transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50 p-6 rounded-lg hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
                <p className="text-gray-300 mb-6">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-gray-300">info@speciano.com</span>
                  </div>
                  <div className="flex items-center transform hover:translate-x-2 transition-transform duration-200">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-300">123 Main St, City, Country</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideInRight" delay={400}>
              <div className="transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50 p-6 rounded-lg hover-lift">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page