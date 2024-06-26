const flattenedArray = arr => [].concat(...arr);
const maxNumber = arr => Math.max(...arr);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);