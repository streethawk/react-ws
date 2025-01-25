import React, { useState, useEffect } from 'react';
import './App.css'; // Include the CSS above in your stylesheet

const CompanyName = ({ name }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const splitWords = name.split(' '); // Split the name into words
    setWords(splitWords);
  }, [name]);

  return (
    <div className="company-name">
      {words.map((word, index) => (
        <span
          className="word"
          key={index}
          style={{ animationDelay: `${index * 0.5}s` }} // Delay for each word
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default CompanyName;
