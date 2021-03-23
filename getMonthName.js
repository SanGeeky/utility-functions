const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

export default const monthName = (place) => (
  months[place]
    ? months[place]
    : 'There are only 12 months!'
);


