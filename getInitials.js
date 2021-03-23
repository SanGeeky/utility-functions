// "For your information" -> "FYI"
export default const initials = (name = '') => (
  return name
    .split(' ')
    .map(word => `${word.charAt(0).toUpperCase()}.`)
    .join('')
);


