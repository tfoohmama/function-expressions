const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const scriptRootPath = path.join(repositoryRootPath, 'script');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());