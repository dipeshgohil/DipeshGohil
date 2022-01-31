var n = 5;
let i,j;
let text = "";
for (i = 0; i < n; i++) {

  for (j = 0; j < n - i; j++) {
    text += "*";
  }
  text += "<br>";
}
document.getElementById("demo1").innerHTML = text;


n = 6;
let text2=" ";
for (i = 1; i <= n; i++) 
{

for (j = 1; j <= i; j++)
{
if(j==1 || j==i || i==n)
{
    text2 += ' * ';
}
else
{
        text2 += "_";
    
}
}
text2 += "<br>";
}

document.getElementById("demo2").innerHTML = text2;


n = 5;
let text3 = "";
for (i = 1; i <= n; i++) {

for (j = n; j > i; j--) {
text3 += "_";
}

for (let k = 0; k < i * 2 - 1; k++) {
text3 += "*";
}
text3 += "<br>";
}

for (i = 1; i <= n - 1; i++) {

for (j = 0; j < i; j++) {
text3 += "<bp> </bp>";
}
for (let k = (n - i) * 2 - 1; k > 0; k--) {
text3 += "*";
}
text3 += "<br>";
}

document.getElementById("demo3").innerHTML = text3;
