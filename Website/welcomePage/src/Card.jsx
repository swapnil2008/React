// src/Card.jsx
import React from 'react';

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-64 h-80 flex flex-col justify-between transform transition-transform duration-500 hover:rotate-6">
      <h2 className="text-2xl font-bold text-green-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
