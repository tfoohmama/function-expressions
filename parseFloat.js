const symbolsPath = path.join(buildOutputPath, 'symbols');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const stringReverse = str => str.split("").reverse().join("");
const uniqueArr = (arr) => [...new Set(arr)];
const buildOutputPath = path.join(repositoryRootPath, 'out');