
const str = 'vatghvf';
const nearest = (arr = [], el) => arr.reduce((acc, val) => Math.min(acc,
Math.abs(val - el)), Infinity);
const vowelNearestDistance = (str = '') => {
   const s = str.toLowerCase();
   const vowelIndex = [];
   for(let i = 0; i < s.length; i++){
      if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' ||
      s[i] === 'u'){
         vowelIndex.push(i);
      };
   };
   return s.split('').map((el, ind) => nearest(vowelIndex, ind));
};
document.write(vowelNearestDistance(str)); 