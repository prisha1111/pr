import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample list of suggestions (replace with API data later if needed)
  const suggestionList = ['rice', 'curd', 'paneer', 'milk', 'bread'];

  useEffect(() => {
    // Clear previous timer
    let timer;

    // Set new timer only if input is not empty
    if (inputValue.trim() !== '') {
      timer = setTimeout(() => {
        const filteredSuggestions = suggestionList.filter(suggestion =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(filteredSuggestions.length > 0); // Show only if there are suggestions
      }, 2000); // 2-second delay
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }

    // Cleanup timer on unmount or input change
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inputValue]); // Dependency on inputValue

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <nav className="bg-white text-black p-4 shadow-md flex justify-between items-center border-b">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-2xl font-bold text-green-600">GrocHop</Link>

        <div>
          <span className="text-lg font-semibold">Delivery in 8 minutes</span>
          <select className="ml-2 bg-white text-gray-800 p-1 rounded border border-gray-300">
            <option>B62, Pocket B, South City I, Sect...</option>
          </select>
        </div>

        <div className="relative">
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-2 w-64">
            <span className="text-gray-500 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search 'paneer'"
              value={inputValue}
              onChange={handleInputChange}
              className="bg-transparent border-none w-full focus:outline-none text-gray-600"
            />
          </div>
          {/* Display suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:underline">Login</Link>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">My Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;