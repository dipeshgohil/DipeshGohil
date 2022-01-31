
function sumArray(x) 
{
   sum = 0;
   for(var i=0;i<x.length;i++)
   {
      str=x[i];

  let nums = [];
   
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      nums.push(Number(str[i]));
    }
  }      
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
   }
return sum;
}
document.write(sumArray(["5hsgjkhrk","5fkjkf","5fj","jgwf5"]));