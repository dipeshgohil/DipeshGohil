
   const boomerangs = (arr) => {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 2 ] && arr[i + 1] !== arr[i]) {
        (a.push(arr[i]));
        (a.push(arr[i + 1]));
        (a.push(arr[i + 2]));
        b.push(a);
        a = [];
      }
    }
    let c = b.length;
    return c;
  };
  
  document.write(boomerangs([9, 5, 9, 5, 1, 1, 1]),"<br>");
  document.write(boomerangs([5, 6, 6, 7, 6, 3, 9]),"<br>");
  document.write(boomerangs([4, 4, 4, 9, 9, 9, 9]),"<br>");