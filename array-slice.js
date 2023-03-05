var numbers = [10, 12, 13, 14, 42, 35, 36];

//slice will cut down array from given limit
var newNumber = numbers.slice(2, 4);
console.log(newNumber);


//includes uses to search an element from an array
var search = numbers.includes(33);
console.log(search);

var name = 'name is';
var newName = name.substring(0, 2);
console.log(newName);