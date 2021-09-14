let string = 'Hello';
console.log(string.split('').reverse().join(''));

/ или так/

function reverseString(str) {

  return str.split("").reverse().join("");

}


console.log(reverseString("Hello"));