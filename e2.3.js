/ задание 1 /

var a = prompt('Введите что-то');
alert(+a);
var num = +a;
alert(typeof(+a));
if (num % 2 === 0)  {
  console.log('Число четное');
}else if (num % 2 === 1)  {
  console.log('Число нечетное');
}else if (Number.isNaN(num))  {
  console.log('Вы где-то ошиблись');
} else {
   console.log("Вы где-то ошиблись")
}


/задание 2/

let x;
if (typeof x === 'string')  {
  console.log('Это строка');
}else if (typeof x === 'number')  {
  console.log('Число');
}else if (type === 'boolean')  {
  console.log('Это логический тип');
} else {
   console.log("Тип не определен")
}


