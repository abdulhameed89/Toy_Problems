	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var result=""
		for (var i = 0; i <input.length; i++) {
			if (input[i] === input[i].toUpperCase()) {
				result+=input[i].toLowerCase();
			}
			else
			{
			result+=input[i].toUpperCase();

			}
		}
		return result;
	}
/*		function swap(input){
		var result=""
		_(input).each(function(elem){
			if (elem === elem.toUpperCase()){
				result+=elem.toLowerCase();
			}
			else
			{
			result+=elem.toUpperCase();

			}
		})
			
		return result;
	}*/
	