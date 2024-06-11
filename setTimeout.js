console.log(1 +  "2" + "2");
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));