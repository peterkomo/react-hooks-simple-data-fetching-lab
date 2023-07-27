// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image
        setDogImage(data.message);
        setLoading(false); // Set loading to false after the data is fetched
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false); // In case of error, still set loading to false
      });
  }, []); // The empty dependency array ensures that the effect runs only once, on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
