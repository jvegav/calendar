import React, { useState } from 'react';
import Calendar from './components/calendar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App h-full w-full ${darkMode ? 'dark: bg-gray-800 text-white ' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="m-4 p-2 border rounded">
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <Calendar darkMode={darkMode} />
    </div>
  );
}

export default App;