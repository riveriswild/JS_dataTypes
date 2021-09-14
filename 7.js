let array = [1,4,3,6,8, '', 'k', 0];
let array2 = [];
let array3 = [];
let arrayZ =[];

for (var i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number') {
    if (array[i] % 2 !== 0) {
      array3.push(array[i]);
    } else if (array[i] % 2 === 0) {
      if (array[i] === 0) {
        arrayZ.push(array[i]);
      } else {
        array2.push(array[i]);
      }
    }
  }
}

if (arrayZ.length) {
  console.log('В массиве есть ноль.');
}

console.log(`В массиве ${array2.length} четных чисел и ${array3.length} нечетных`);
