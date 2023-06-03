import React, { useState, useEffect } from 'react';
import './QuizApp.css';

const QuizApp = () => {
    const questions = [
        {
          id: 1,
          question: 'What is Spring Boot?',
          options: [
            'A Java development framework',
            'A JavaScript library',
            'A CSS framework',
            'A database management system',
          ],
          answer: 'A Java development framework',
        },
        {
          id: 2,
          question: 'What is React?',
          options: [
            'A Java development framework',
            'A JavaScript library for building user interfaces',
            'A programming language',
            'A database management system',
          ],
          answer: 'A JavaScript library for building user interfaces',
        },
        {
            id: 3,
            question: 'What is Java?',
            options: [
              'A JavaScript library',
              'A programming language',
              'A CSS framework',
              'A database management system',
            ],
            answer: 'A programming language',
          },
          {
            id: 4,
            question: 'What is web development?',
            options: [
              'Creating and maintaining websites and web applications',
              'Developing mobile applications',
              'Managing databases',
              'Designing user interfaces',
            ],
            answer: 'Creating and maintaining websites and web applications',
          },{
            id: 5,
            question: 'What is a RESTful API?',
            options: [
              'A programming language',
              'A communication protocol',
              'A database management system',
              'A user interface framework',
            ],
            answer: 'A communication protocol',
          },
          {
            id: 6,
            question: 'What is JSX?',
            options: [
              'A JavaScript extension for XML-like syntax',
              'A database management system',
              'A Java development framework',
              'A CSS framework',
            ],
            answer: 'A JavaScript extension for XML-like syntax',
          },
          {
            id: 7,
            question: 'What is Git?',
            options: [
              'A version control system',
              'A JavaScript library',
              'A CSS framework',
              'A database management system',
            ],
            answer: 'A version control system',
          },
          {
            id: 8,
            question: 'What is responsive web design?',
            options: [
              'Designing websites for mobile devices only',
              'Designing websites that adapt to different screen sizes',
              'A programming language',
              'A database management system',
            ],
            answer: 'Designing websites that adapt to different screen sizes',
          },

          {
            id: 9,
            question: 'What is object-oriented programming?',
            options: [
              'A database management system',
              'A programming paradigm based on objects',
              'A JavaScript library',
              'A CSS framework',
            ],
            answer: 'A programming paradigm based on objects',
          },
          {
            id: 10,
            question: 'What is the role of a backend developer?',
            options: [
              'Developing the user interface of a website',
              'Managing databases and server-side logic',
              'Optimizing website performance',
              'Creating design mockups',
            ],
            answer: 'Managing databases and server-side logic',
          },
          
        ];
        
       

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        handleNext();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowNext(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(prevScore => prevScore + 1);
      }
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedOption('');
      setShowNext(false);
      setTimeLeft(120);
    } else {
      setShowResult(true);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1);
    }
    setShowResult(true);
  };

  const currentQuestionData = questions[currentQuestion];

  if (showResult) {
    return (
      <div className='qwerty'>
        <h1 className='asdfg'>HEXAGON Quiz</h1>
        <h3 className='zxcvb'>Quiz Completed</h3>
        <p>Your Score: {score} out of {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="cont">
      <h1 className="cont1">HEXAGON Quiz</h1>
      <h3 className="cont2">Question {currentQuestion + 1}</h3>
       <p className="cont4">{currentQuestionData.question}</p>
      <ul className="cont5">
        {currentQuestionData.options.map((option, index) => (
          <li key={index}>
            <button
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
              disabled={showNext}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <p className="cont3">Time Left: {timeLeft}</p>
     
      {currentQuestion === questions.length - 1 ? (
        <button className="cont7" onClick={handleQuizSubmit}>
          Submit
        </button>
      ) : (
        showNext && <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default QuizApp;
