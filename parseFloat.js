const channel = getChannel(computedAppVersion);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;