//How to declare an array in Javascript (2ways):

let array = new Array();
let array1 = [];

//when we want to add and remove elements at the end of an array, we use push and pop methods

let array2 = ["john", "doe", "james", "smith", "bella"];
array2.push("jack");
// console.log(array2);

array2.pop();
// console.log(array2);


//when we want to add and remove elements at the beginning of an array, we use unshift and shift methods
let array3 = ["john", "doe", "james", "smith"];
array3.unshift("edward");
array3.shift();
// console.log(array3);
