import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsWaiting(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const cardClass = isOpen ? 'birthdayCard open' : 'birthdayCard initial waiting';
  const fireClass = isOpen ? 'fireCrackling' : '';
  const flowerClass = isOpen ? 'flowerAnimation' : '';

  return (
    <div className={cardClass}>
      {isWaiting && <div className="waiting">Waiting...</div>}
      <div className={`cardFront ${fireClass}`}>
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY vodoo!</h3>
        <p>Dear Friend,</p>
        <p>
          Happy birthday!! I hope your day is filled with lots of love and
          laughter! May all of your birthday wishes come true.
        </p>
        <p className="name">Pawan</p>
      </div>
      {isOpen && <div className={`flower ${flowerClass}`} />}
    </div>
  );
};

export default App;
