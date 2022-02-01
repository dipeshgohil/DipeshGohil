var n = 5;
let i,j;
let text = "";
for (i = 0; i < n; i++) {

  for (j = 0; j < n - i; j++) {
    text += "*";
  }
  text += "\n";
}
console.log("1.\n",text)

n = 6;
let text2 = "";

for (i = 1; i <= n; i++) {
  // printing star
  for (j = 0; j < i; j++) {
    if(i === n) {
      text2 += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        text2 += "*";
      }
      else {
        text2 += " ";
      }
    }
  }
  text2 += "\n";
}
console.log("2.\n",text2);

n = 5;
let text3 = "";
for (i = 1; i <= n; i++) {

for (j = n; j > i; j--) {
text3 += " ";
}

for (let k = 0; k < i * 2 - 1; k++) {
text3 += "*";
}
text3 += "\n";
}

for (i = 1; i <= n - 1; i++) {

for (j = 0; j < i; j++) {
text3 += " ";
}
for (let k = (n - i) * 2 - 1; k > 0; k--) {
text3 += "*";
}
text3 += "\n";
}

console.log("3.\n",text3);
