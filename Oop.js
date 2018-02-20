// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


/*function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var upper=upperbound;
  var rand=randInt(upper)
  var counter=0;
  return {
  	guessMyNumber:function(n){
  		counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
  	},
  	giveUp:function(){
    	return rand;
  	},
  	numOfGuesses:function(){
    	return counter;
  	}
  }
}*/
function classMakeGame(upperbound){
  var instance={};
  instance.upper=upperbound;
  instance.rand=randInt;
  instance.counter=0;
  instance.guessMyNumber=guessMyNumber;
  instance.giveUp=giveUp;
  instance.numOfGuesses=numOfGuesses;
  return instance;
}
//var upperbound=function(this.upper);
var randInt=function(n) {
    return Math.floor(Math.random() * (n + 1));
};
var guessMyNumber=function(n){
      console.log(this)
      var that=this;
      this.counter++;
      if (n > that.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
      } else if (n === that.rand) {
        return "You guessed my number!";
      }
      console.log(this.rand)
      return "Nope! That wasn't it!";
    };
var giveUp=function(){
      return this.counter;
    };
var numOfGuesses=function(){
      return this.counter;
    };