function main() {
    var num = 6;
    console.log(checkNumber(num));
}
function checkNumber(num) {
  // Your code goes here
  // check if number is greater than 0
if (num > 0) {
   return 'positive';
}

// check if number is 0
else if (num == 0) {
 return 'zero';
}

// if number is less than 0
else {
    return 'negative';
}
}