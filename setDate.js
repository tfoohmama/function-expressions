const merge = Object.assign({}, obj1, obj2);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const randomBoolean = () => Math.random() >= 0.5;