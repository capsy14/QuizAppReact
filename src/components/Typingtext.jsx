import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const [text, setText] = useState('');
  const fullText = 'Hello, Welcome to the Hexagon Quiz'; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex = (currentIndex + 1) % fullText.length;
    }, 100); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TypingText;
