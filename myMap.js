// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map





function myMap(arr, callback, fn) {

//  CODE INSIDE HERE   //
  var mapped = [];
  for(var i = 0; i < arr.length; i++){
  	var output = callback(arr[i], i, arr);
		
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/

/*
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
*/





// export this function (you can ignore this for now)
module.exports = myMap;
