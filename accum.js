// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	var result=""
    	var counter=0
        for (var i = 0; i<input.length; i++) {
        	result+=input[i].toUpperCase();
        	for (var j = 0; j <counter; j++) {
        		result+=input[i];
        	}
        	counter++
        	if (i !==input.length-1) {
        		result+="-"
        	}
        	
        }
        return result;
    }