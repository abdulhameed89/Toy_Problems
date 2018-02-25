// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
function each(coll,f){
	if (!Array.isArray(coll)) {
		for(var key in coll){
			f(coll[key],key)
		}
	}
	for (var i =0 ; i <coll.length; i++) {
		f(coll[i],i)
	}
}
	function characPosit(character){
		var result="not found"
		var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
		each(alphabet,function(elem,i){
			if(elem === character){
			result= "Position of alphabet: "+(i+1)

			}
		})
		return result;
		
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var result=""
		for (var i = 0; i <n; i++) {
			result+=s;
		}
		return result;
		
	}