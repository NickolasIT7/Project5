// 7dz
// let input 
// do {
// input = prompt ('введите число') as string
// }while (input?.length<1)
// const shift = +(prompt ('на сколько разрядов сдвинуть число?')as string)
// let newNumber = ''
// for (let i=shift;i<input.length;i++){
// newNumber += input[i]
// }
// for (let i=shift-1;i>=0;i--) {
// newNumber += input [i]   
// }
// alert (newNumber)
// 2pz
// let num = 1000
// let i = 0
// do { num/=2
// i++
// } while (num > 50)
// console.log ('num=',num, 'i=',i)
// Функции
// function имя(параметры, через запятую) {
//     /тело, код функции/
//   }
// let local = 'глобальная переменная'
//  function showMessage(local:any) {
//     local = 'локальная переменная'
//     console.log( 'Всем привет!' )
// return local
//   }
//   console.log(local)
//   console.log(showMessage(local))
function showMessage(from, text, devider) {
    if (devider === void 0) { devider = ':'; }
    console.log(from + devider + '' + text);
}
showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.
// Функция должна делать только то, что явно подразумевается её названием. 
// И это должно быть одним действием.
// Два независимых действия обычно подразумевают две функции, 
// даже если предполагается, что они будут вызываться вместе 
// (в этом случае мы можем создать третью функцию, которая будет их вызывать).
// function checkAge(age) {
//       return (age > 18) || confirm('Родители разрешили?');
//     } 
// function getSum(a:number, b=0, c=0, d=0, e=0) {
// return a+b+c+d+e
// }
// function getUserValues(text){
// return (prompt) (text)   
// }
// function min(a,b) {
//  if (a<b){
//  return a
//  }
//  else {return b 
// }
// }
// let a = getUserValues('первое число')
// let b = getUserValues('второе число')
// console.log (min(a,b))
function getUserValues(text) {
    var temp = +prompt(text);
    return temp;
}
function pow(chislo, stepen) {
    return Math.pow(chislo, stepen);
}
var a = getUserValues('введите число');
var b = getUserValues('степень');
console.log(pow(a, b));
