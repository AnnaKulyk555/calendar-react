import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [state] = useState({
    weekStartDate: new Date(),
  });

  const { weekStartDate } = state;
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
