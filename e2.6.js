/задание 6/

let array = ["a","a","a"];
let array2 = [];
array2.push(array[0]);
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] === array[i+1]) {
          array2.push(array[i+1]);
        }
    }
if (array2.length === array.length) {
  console.log('True');
}
else {
   console.log("False");
}


/задание 7/

let array = [1,4,3,6,8, '', 'k', 0];
let array2 = [];
let array3 = [];
let arrayZ =[];

for (var i = 0; i< array.length; i++)  {
  if (typeof array[i] === 'number')  {
    if (array[i] % 2 !== 0) {
    array3.push(array[i]);
  }
      else if (array[i] % 2 === 0)  {
        if (array[i] === 0) {
          arrayZ.push(array[i]);
        }
        else {
          array2.push(array[i]);
        }
      }
  
}
  
}

if (arrayZ.length) {
  console.log ('В массиве есть ноль.');
}

console.log(`В массиве ${array2.length} четных чисел и ${array3.length} нечетных`);
