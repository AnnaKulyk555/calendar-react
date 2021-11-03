import React, { useState } from 'react';
import moment from 'moment';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStart, setWeekStart] = useState({
    weekStartDate: moment().toDate(),
  });
  const [modalStatus, setModalStatus] = useState({
    showModal: false,
  });

  const { weekStartDate } = weekStart;
  const { showModal } = modalStatus;

  const goNextWeek = () => {
    const nextWeekStart = moment(weekStartDate).add(7, 'days');
    setWeekStart({
      weekStartDate: nextWeekStart.toDate(),
    });
  };

  const goPrevWeek = () => {
    const nextWeekStart = moment(weekStartDate).subtract(7, 'days');
    setWeekStart({
      weekStartDate: nextWeekStart.toDate(),
    });
  };

  const goCurrentWeek = () => {
    setWeekStart({
      weekStartDate: moment().toDate(),
    });
  };

  const showModalHandler = () => {
    setModalStatus({
      showModal: true,
    });
  };

  const hideModalHandler = () => {
    setModalStatus({
      showModal: false,
    });
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
      <Modal showModal={showModal} onHideModal={hideModalHandler} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
