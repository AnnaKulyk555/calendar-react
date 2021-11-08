import React, { useState } from 'react';
import moment from 'moment';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(moment().toDate());
  const [isModalVisible, setModalVisible] = useState(false);

  const goNextWeek = () => {
    const nextWeekStart = moment(weekStartDate).add(7, 'days').toDate();
    setWeekStartDate(nextWeekStart);
  };

  const goPrevWeek = () => {
    const nextWeekStart = moment(weekStartDate).subtract(7, 'days').toDate();
    setWeekStartDate(nextWeekStart);
  };

  const goCurrentWeek = () => {
    setWeekStartDate(moment().toDate());
  };

  const showModalHandler = () => {
    setModalVisible(true);
  };

  const hideModalHandler = () => {
    setModalVisible(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        weekStartDate={weekStartDate}
        goNextWeek={goNextWeek}
        goPrevWeek={goPrevWeek}
        goCurrentWeek={goCurrentWeek}
        onShowModal={showModalHandler}
      />
      <Calendar
        weekDates={weekDates}
        isModalVisible={isModalVisible}
        onHideModal={hideModalHandler}
      />
    </>
  );
};

export default App;
