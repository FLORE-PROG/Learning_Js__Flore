// function = is a section of reusable code.
//             Declare a code once and used it wherever you want.
//             Call the function to execute that code.

function add(x,y) {
    return x+y;
}
function substract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}
  
function isEven(number){

    if (number % 2===0) {
      return true;
    } 
     else {
        return false;
    }
  
}
console.log(isEven(39));

