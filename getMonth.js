const reversedString = str => str.split('').reverse().join('');
const isArray = (arr) => Array.isArray(arr);
const isWeekday = (date) => date.getDay() % 6 !== 0;