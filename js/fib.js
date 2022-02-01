   function Fibonacci(num){
	var a = 0;
	var b = 1;
	var c = 1;

	for(let i = 0; i < num  - 2; i++){
	
		a = b + c;
		b = c
		c = a
	}
    document.write(b)
}
const c= prompt("enter a number ");
Fibonacci(c);
