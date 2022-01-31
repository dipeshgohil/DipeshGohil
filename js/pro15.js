
  var products = [
  { id:1,name: 'pro 1', price: 123,},
  { id:2,name: 'pro 1', price: 22 },
  { id:3,name: 'pro 1', price: 16 },
  { id:4,name: 'pro 1', price: 300 }  
];

var price = products.reduce(function(prev, cur) {
  return prev + cur.price;
}, 0);

document.write('Total Price:', price); 