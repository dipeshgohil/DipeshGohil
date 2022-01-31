var n = 5;
  let i,j;
  let text = "";
  for (i = 0; i < n; i++) {
    // printing star
    for (j = 0; j < n - i; j++) {
      text += "*";
    }
    text += "<br>";
  }
  document.getElementById("demo1").innerHTML = text;
  