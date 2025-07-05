'use client';

import React from 'react';

const AnimatedGlasses = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Test element - should be visible */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse"></div>
      
      {/* Large floating glasses */}
      <div className="absolute top-20 left-20 animate-float2" style={{ animationDelay: '0s' }}>
        <svg width="120" height="60" viewBox="0 0 80 40" fill="none" className="opacity-60">
          <path d="M20 10C20 4.47715 24.4772 0 30 0H50C55.5228 0 60 4.47715 60 10V30C60 35.5228 55.5228 40 50 40H30C24.4772 40 20 35.5228 20 30V10Z" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <circle cx="35" cy="20" r="8" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <circle cx="45" cy="20" r="8" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <path d="M43 20L37 20" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3"/>
        </svg>
      </div>

      {/* Medium glasses */}
      <div className="absolute top-40 right-20 animate-float3" style={{ animationDelay: '1s' }}>
        <svg width="90" height="45" viewBox="0 0 60 30" fill="none" className="opacity-50">
          <path d="M15 7.5C15 3.35786 18.3579 0 22.5 0H37.5C41.6421 0 45 3.35786 45 7.5V22.5C45 26.6421 41.6421 30 37.5 30H22.5C18.3579 30 15 26.6421 15 22.5V7.5Z" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2.5" fill="none"/>
          <circle cx="26.25" cy="15" r="6" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2.5" fill="none"/>
          <circle cx="33.75" cy="15" r="6" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2.5" fill="none"/>
          <path d="M32.25 15L27.75 15" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2.5"/>
        </svg>
      </div>

      {/* Small glasses */}
      <div className="absolute bottom-20 left-1/4 animate-drift" style={{ animationDelay: '2s' }}>
        <svg width="60" height="30" viewBox="0 0 40 20" fill="none" className="opacity-40">
          <path d="M10 5C10 2.23858 12.2386 0 15 0H25C27.7614 0 30 2.23858 30 5V15C30 17.7614 27.7614 20 25 20H15C12.2386 20 10 17.7614 10 15V5Z" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <circle cx="17.5" cy="10" r="4" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <circle cx="22.5" cy="10" r="4" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <path d="M21.5 10L18.5 10" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2"/>
        </svg>
      </div>

      {/* Rotating glasses */}
      <div className="absolute top-1/2 right-1/3 animate-rotate-slow">
        <svg width="80" height="40" viewBox="0 0 50 25" fill="none" className="opacity-35">
          <path d="M12.5 6.25C12.5 2.79822 15.2982 0 18.75 0H31.25C34.7018 0 37.5 2.79822 37.5 6.25V18.75C37.5 22.2018 34.7018 25 31.25 25H18.75C15.2982 25 12.5 22.2018 12.5 18.75V6.25Z" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <circle cx="21.875" cy="12.5" r="5" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <circle cx="28.125" cy="12.5" r="5" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2" fill="none"/>
          <path d="M26.875 12.5L23.125 12.5" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2"/>
        </svg>
      </div>

      {/* Glowing glasses */}
      <div className="absolute bottom-10 right-10 animate-pulse-glow">
        <svg width="100" height="50" viewBox="0 0 70 35" fill="none" className="opacity-30">
          <path d="M17.5 8.75C17.5 3.91751 21.4175 0 26.25 0H43.75C48.5825 0 52.5 3.91751 52.5 8.75V26.25C52.5 31.0825 48.5825 35 43.75 35H26.25C21.4175 35 17.5 31.0825 17.5 26.25V8.75Z" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <circle cx="30.625" cy="17.5" r="7" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <circle cx="39.375" cy="17.5" r="7" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="none"/>
          <path d="M37.625 17.5L32.375 17.5" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3"/>
        </svg>
      </div>

      {/* Floating lens elements */}
      <div className="absolute top-1/3 left-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-8 h-8 rounded-full border-3 border-blue-500/60 animate-pulse"></div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 animate-float2" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-6 rounded-full border-2 border-blue-400/50 animate-pulse"></div>
      </div>

      <div className="absolute top-1/4 right-1/6 animate-float3" style={{ animationDelay: '2.5s' }}>
        <div className="w-5 h-5 rounded-full bg-blue-500/40 animate-pulse"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-1/3 animate-drift" style={{ animationDelay: '3s' }}>
        <div className="w-10 h-10 border-3 border-blue-400/40 rotate-45 animate-pulse"></div>
      </div>

      <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: '3.5s' }}>
        <div className="w-8 h-8 border-2 border-blue-300/30 rotate-45 animate-pulse"></div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/2 left-1/6 animate-float2" style={{ animationDelay: '4s' }}>
        <div className="w-9 h-9 border-2 border-blue-300/25 rounded-full animate-pulse"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/3 animate-float3" style={{ animationDelay: '4.5s' }}>
        <div className="w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="absolute top-1/6 right-1/4 animate-drift" style={{ animationDelay: '5s' }}>
        <div className="w-8 h-8 border-2 border-blue-500/35 rotate-12 animate-pulse"></div>
      </div>

      {/* Debug element to ensure component is rendering */}
      <div className="absolute top-5 right-5 w-6 h-6 bg-red-500 rounded-full opacity-70 animate-pulse"></div>
    </div>
  );
};

export default AnimatedGlasses; 