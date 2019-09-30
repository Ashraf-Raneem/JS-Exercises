/* JavaScript code here */
//Task1
console.log("External JS");

//Task 2 

// Method 1
/*
function arraySum (x) {
    for (var i ; i<x.length; i++){
        var sum = 0;
        sum = sum + x[i];
    }
    return sum ; 
}
var arr = [2,3,4,5,6,7]; 
var Sum = arraySum (arr); 
console.log (Sum);
*/

//Method 2
function arraySum (arr) {
    var sum = 0; 
    /*
    arr.forEach(function (element){
        sum= sum + element ; 
    })
    return sum ;
    */
   return (multiplier) => {
       return sum*multiplier; 
   }
}
var sum = arraySum([1,2,3]); 
console.log(sum); 