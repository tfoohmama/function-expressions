const isEmptyArray = arr => !arr.length;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);