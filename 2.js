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