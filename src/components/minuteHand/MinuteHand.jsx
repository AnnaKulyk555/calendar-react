import React, { useState, useEffect } from 'react';

import './minuteHand.scss';

const MinuteHand = () => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const getNextMinute = () => new Date().getMinutes();

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(getNextMinute());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minuteStyle = {
    top: minutes,
  };

  return <span style={minuteStyle} className="calendar__time-slot-minute"></span>;
};

export default MinuteHand;
