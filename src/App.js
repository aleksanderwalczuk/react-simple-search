import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {setSearchTerm(event.target.value)}

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;
