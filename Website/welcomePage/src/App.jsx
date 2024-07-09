// src/App.jsx
import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);

  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
    { title: 'Card 5', description: 'This is the fifth card.' },
    { title: 'Card 6', description: 'This is the sixth card.' },
    { title: 'Card 7', description: 'This is the seventh card.' },
  ];

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-5xl font-bold text-green-600 animate-bounce">
          Welcome to My Website!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the Welcome Page.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setCount(count + 1)}
        >
          Click Me! {count}
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </>
  );
}

export default App;
