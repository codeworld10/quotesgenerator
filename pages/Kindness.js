import React, { useState } from 'react';
import Footer from '../src/Components/Footer';

function Kindness() {
  const [randomAct, setRandomAct] = useState(null);

  // Function to handle generating a new random act of kindness
  const handleNextClick = async () => {
    try {
      // Fetch random act of kindness from API route
      const response = await fetch('/api/randomgenerate');
      const data = await response.json();
      setRandomAct(data);
    } catch (error) {
      console.error('Error fetching random act of kindness:', error);
    }
  }

  return (
    <>
    <div className='container'>
    <h1 className='Heading'>Acts of Kindness Generator</h1>
      <div className='button'>
      <button className='btn-color' onClick={handleNextClick}>Generate</button>
      </div>
    </div>
      <div>
      <h2 className='task-heading'>
        Today Kindness Challenge
      </h2>
      {randomAct && (
        <div>
          <h3 className='text'>{randomAct.act}</h3>
          <h4 className='text1'>{randomAct.description}</h4>
        </div>
      )}
      </div>
      <div className='footer-wrapper'>
      <Footer />
      </div>
    </>
  );
}

export default Kindness;
