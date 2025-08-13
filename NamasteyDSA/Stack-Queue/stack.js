// Stack -> LIFO

let stack = [];

stack.push(2); //pushed the elements in the stack
stack.push(4);
stack.push(9);
stack.push(3);
stack.push(7);

console.log(stack);

stack.pop(); //pops out the last element in stack
stack.pop();

console.log(stack);

console.log(stack[stack.length-1]);  //peeks from top