var date1 = new Date(prompt("enter a first date","MM/DD/YYYY"));
var date2 = new Date(prompt("enter a Second date","MM/DD/YYYY"));
  
var Difference_In_Time = date2.getTime() - date1.getTime();
  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
document.write("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);
 