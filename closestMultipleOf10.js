 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	var result=Math.round(num*0.1);
 	return result*10

 	//your code is here
 }