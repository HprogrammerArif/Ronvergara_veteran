import React from 'react';
import { Link } from 'react-router-dom';

const Auto_Narative_Video = () => {
  return (
    <div className="min-h-screen bg-[#0A3161] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-10">🎥 Watch This Important Video</h1>

      <div className="w-full max-w-4xl aspect-video mb-8">
      <iframe 
      width="900" 
      height="450" 
      src="https://www.youtube.com/embed/ako1EFS7hB4?si=6mF_7lBlDUjukOhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <p className="text-lg text-center max-w-xl">
        This video provides essential guidance about your next steps. Make sure to watch it fully before proceeding.
      </p>

      <Link to="/subscription">
      <button type="submit" className="bg-[#B31942] text-white px-20 mt-10 py-2 rounded">Next</button>
      </Link>
    </div>
  );
};

export default Auto_Narative_Video;

