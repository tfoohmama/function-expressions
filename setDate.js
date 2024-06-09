const resultingPromises = urls.map((url) => makHttpRequest(url));
const sumArray = arr => arr.reduce((total, current) => total + current, 0);