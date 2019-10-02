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

//task 3 

/*
function validEmail (email) {
    /.com/.test(email); 
    return true; 
}
var emailAddress = validEmail('ashrafraneem@gmail.com'); 
    console.log(emailAddress);
    */

function validEmail (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
}
console.log(validEmail("asdad")); 
console.log(validEmail("ashrafraneem@gmail.com"));

//task 4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
function readStatus (index) {
    return library[index].readingStatus
}
console.log(readingStatus(2)); 