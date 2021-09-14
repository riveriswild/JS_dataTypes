let array = ['a', 'a', 'a'];
let array2 = [];
array2.push(array[0]);
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] === array[i+1]) {
          array2.push(array[i + 1]);
        }
    }
if (array2.length === array.length) {
  console.log('True')
} else {
 console.log('False')
}
