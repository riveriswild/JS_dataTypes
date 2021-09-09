/задание 3/


let string = 'Hello';
console.log(string.split('').reverse().join(''));

/ или так/

function reverseString(str) {

  return str.split("").reverse().join("");

}


console.log(reverseString("Hello"));




/задание 4/


console.log(Math.floor(Math.random() * 101));