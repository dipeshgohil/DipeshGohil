const arr = [1, 2, [3, 4, [5]]];
const deepCount = (arr = []) => {
   return arr
   .reduce((acc, val) => {
      return acc + (Array.isArray(val) ? deepCount(val) : 0);
   }, arr.length);
};
console.log(deepCount(arr));