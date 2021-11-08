import moment from 'moment';

export const getWeekStartDate = date => {
  const monday = moment(date).startOf('week').add(1, 'd').toDate();
  return monday;
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    result.push(moment(startDate).add(i, 'd').toDate());
  }
  return result;
};

export const formatMins = mins => (mins < 10 ? `0${mins}` : mins);

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
