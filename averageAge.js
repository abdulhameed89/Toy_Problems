// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
 function each(coll,f){
 	for (var key in coll) {
 		f(coll[key])
 	}
 }
 function map(coll,f){
 	var acc=[]
 	if (!Array.isArray(acc)) {
 		acc={}
 	}
 	each(coll,function(element,key){
 		acc[key]=f(element)
 	})
 	return acc
 }
 function reduce(coll,f,start){
 	var acc=start
 	each(coll,function(element,key){
 		acc=f(acc,element)
 	})
 	return acc
 }
 function averageAge(people) { 
var count=0
var result= reduce(people,function(acc,element){
	
	if(element.age>18 && element.age<50){
		console.log(acc,element.age)
		return acc+element.age
	}
	else{
		count++
		return acc
	}
},0)
return result/(people.length-count)
       // YOUR CODE HERE 
 }

 averageAge(people); // 43+36+44+24 = 36.74