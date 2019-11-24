import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data'


console.log(data.map(item => item.title))
function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const queryData = data.map(trip => trip.title)
  const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];


  useEffect(() => {
    const results = queryData.filter(query => (query.toLowerCase().includes(searchTerm)));

    setSearchResults(results)
  }, [searchTerm])

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
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
