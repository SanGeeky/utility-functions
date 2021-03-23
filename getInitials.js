// "For your information" -> "FYI"
const initials = (name = '') => (
  name
    .split(' ')
    .map(word => `${word.charAt(0)}.`)
    .join('')
);
