
let a = prompt('Введите что-то');
alert(+a);
let num = +a;
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



