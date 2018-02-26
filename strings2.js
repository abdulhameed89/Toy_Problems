//  Given a sequence of items and a specific item in that sequence, return the item
// 	immediately following the item specified. If the item occurs more than once in a sequence,
// 	return the item after the first occurence. This should work for a sequence of any type.
// 	When the item isn't present or nothing follows it, the function should return null
//  nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
//  nextItem("testing", "t") # "e"

	function each(coll,f){
		if(Array.isArray(coll)){
			for (var i = 0; i <coll.length; i++) {
				f(coll[i],i)
			}
		}
		else{
			for(var key in coll){
				f(coll[key],key)
			}
		}
	}
	
	function nextItem(items, elem){
		var result=[]
		if(typeof items === "string"){
			items=items.split('');
		}
	each(items,function(item,i){
		if(item === elem){
			result.push(items[(i+1)]);
			
		}
	})
	return result[0];
	}

//  We need a function that can transform a number into a string.
// 	What ways of achieving this do you know?
// 	numberToString(123); // returns '123';`   
// 	numberToString(999); // returns '999';`

	function numberToString(num) {
		var result=""
		result+=num;
		return result;
	  //your code is here
	}
