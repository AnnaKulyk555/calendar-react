import React from 'react';
import moment from 'moment';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ weekStartDate, goNextWeek, goPrevWeek, goCurrentWeek, onShowModal }) => (
  <header className="header">
    <button onClick={onShowModal} className="button create-event-btn">
      <i className="fas fa-plus create-event-btn__icon"></i>
      <span>Create</span>
    </button>
    <div className="navigation">
      <button onClick={goCurrentWeek} className="navigation__today-btn button">
        Today
      </button>
      <button onClick={goPrevWeek} className="icon-button navigation__nav-icon">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={goNextWeek} className="icon-button navigation__nav-icon">
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">
        {months.map(month => {
          const currentMonth = moment(weekStartDate).format('MMMM');
          const nextMonth = moment(weekStartDate).add(1, 'M').format('MMMM');

          return currentMonth === month ? `${currentMonth} - ${nextMonth}` : null;
        })}
      </span>
    </div>
  </header>
);

export default Header;
