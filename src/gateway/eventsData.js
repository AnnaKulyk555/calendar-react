const eventsData = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2021, 10, 1, 12, 15),
    dateTo: new Date(2021, 10, 1, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2021, 10, 2, 7, 15),
    dateTo: new Date(2021, 10, 2, 13, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2021, 10, 3, 12, 30),
    dateTo: new Date(2021, 10, 3, 13, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2021, 10, 4, 17, 30),
    dateTo: new Date(2021, 10, 4, 19, 0),
  },
  {
    id: 5,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2021, 10, 1, 10, 30),
    dateTo: new Date(2021, 10, 1, 11, 0),
  },
];

export const addEvent = event => {
  const { date, description, endTime, startTime, title } = event;
  eventsData.push({
    id: Math.random(),
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  });
};

export const deleteEvent = id => {
  eventsData.splice(id - 1);
};

export default eventsData;
