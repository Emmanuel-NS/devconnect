import React from 'react';

const Home = () => {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to DevConnect</h1>
      
      <p className="text-lg text-gray-700 mb-10 text-center">
        DevConnect is a simple front-end React-based project built to help me explore React concepts and showcase basic navigation, routing, and content organization.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🎯 Our Mission</h2>
          <p className="text-gray-600">
            To provide a beginner-friendly environment for learning and experimenting with React, with a focus on clean code, basic routing, and component structuring.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">⚙️ Why This Project?</h2>
          <p className="text-gray-600">
            This project was created as a practical way to reinforce my understanding of front-end development using React and Tailwind CSS, and to experiment with reusable UI components.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚀 Key Features</h2>
          <p className="text-gray-600">
            Routing with React Router, clean navigation bar, dynamic blog post rendering, and a responsive layout — all built from scratch to build confidence in modern frontend tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
