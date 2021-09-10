/задание 8/

let map = new Map();
map.set('name', 'John');
map.set('surname', 'Doe');
map.set('email', 'johndoe@icloud.com');

for (let name of map.keys()) {

    console.log(name); 
  
  }  

map.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`); 
});
